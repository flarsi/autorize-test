import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import {UserContext} from "../../../../../context/UserContext";
import "./UserAvatar.scss"
import axios from "axios";

export const UserAvatar = () => {

    const user = useContext(UserContext)
    console.log(user.data)


    const changeUserAvatar = (event) => {
        const eventFile = event.target.files[0]
        let file = new File(['avatar'], eventFile.name, {type: eventFile.type})
        // setAvatar(event.target.files[0])
        console.log(file)
        const token = localStorage.getItem("token")
        axios({
            method:"put",
            url: 'http://localhost:3001/api/v1/users/upload/'+user.data.id,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: file
        })
    }

    return (
        <div className={"userAvatar"}>
            {user.data.avatar ?
                <div className={"userAvatar--img"}>
                    <img alt={user.data.avatar}/>
                    <Button
                        variant="contained"
                        component="label"
                        className={"userAvatar--change-btn"}
                    >
                        <input
                            type="file"
                            style={{ display: "none" }}
                            accept=".jpg, .jpeg, .png"
                            onChange={changeUserAvatar}
                        />
                        <InsertPhotoIcon/>
                    </Button>
                </div>
                :
                <Button
                    variant="contained"
                    component="label"
                    className={"userAvatar--add-btn"}
                >
                    <AddIcon/>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        accept=".jpg, .jpeg, .png"
                        onChange={changeUserAvatar}
                    />
                </Button>
            }
        </div>
    )
}