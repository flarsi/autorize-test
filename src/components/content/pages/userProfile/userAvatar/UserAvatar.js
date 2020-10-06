import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import {UserContext} from "../../../../../context/userContext/UserContext";
import "./UserAvatar.scss"
import {updateUserAvatar} from "../../../../../helpers/querys";
import {isResponseOk} from "../../../../../helpers/middlewares";

export const UserAvatar = () => {

    const user = useContext(UserContext)

    const changeUserAvatar = (event) => {
        const eventFile = event.target.files[0]
        const formData = new FormData();
        formData.append("avatar", eventFile, "avatar.png");
        updateUserAvatar(user.data.id, formData, user.data.token, user.data.isAuth).then((res) => {
            isResponseOk(res.status, () => {
                user.setUserData({avatar: res.data.avatar})
            })
        })
    }

    return (
        <div className={"userAvatar"}>
            {user.data.avatar ?
                <div className={"userAvatar--img"}>
                    <img src={"http://localhost:3001"+user.data.avatar} alt={"some img"}/>
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