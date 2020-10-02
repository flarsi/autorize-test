import React from "react";
import "./UserProfile.scss"
import {Grid} from "@material-ui/core";
import {NameInput} from "./nameInput/NameInput";
import {UserAvatar} from "./userAvatar/UserAvatar";

export const UserProfile = () => {

    return(
        <Grid container direction={"row"} justify={"space-between"} className="userProfile">
            <Grid item container direction={"row"} justify={"space-between"} xs={6} className="userInfo">
                <Grid item container direction={"column"} xs={5} >
                    <UserAvatar/>
                </Grid>
                <Grid item container direction={"column"} xs={5} >
                    <NameInput />
                </Grid>

            </Grid>
            <Grid item container xs={6} className="userPosts"></Grid>

        </Grid>
    )
}