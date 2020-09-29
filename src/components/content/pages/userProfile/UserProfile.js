import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import "./UserProfile.scss"
import {Grid} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {NameInput} from "./nameInput/NameInput";
import {UserContext} from "../../../../context/UserContext";

export const UserProfile = () => {

    const user = useContext(UserContext)
    console.log(user.data)

    return(
        <Grid container direction={"row"} justify={"space-between"} className="userProfile">
            <Grid item container direction={"row"} justify={"space-between"} xs={6} className="userInfo">
                <Grid item container direction={"column"} xs={5} >
                    <Button
                        variant="contained"
                        component="label"
                        className={"userAvatar"}
                    >
                        <AddIcon/>
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </Grid>
                <Grid item container direction={"column"} xs={5} >
                    <NameInput />

                </Grid>

            </Grid>
            <Grid item container xs={6} className="userPosts"></Grid>

        </Grid>
    )
}