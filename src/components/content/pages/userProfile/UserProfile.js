import React from "react";
import "./UserProfile.scss"
import {Grid} from "@material-ui/core";
import {NameInput} from "./nameInput/NameInput";
import {UserAvatar} from "./userAvatar/UserAvatar";

export const UserProfile = () => {

    return(
        <Grid container direction={"row"} justify={"space-between"} className="userProfile">
            <Grid item container direction={"row"} justify={"space-between"} xs={12} spacing={3} className="userInfo">
                <Grid item container direction={"row"} lg={6} md={4} sm={6} xl={5} xs={12}>
                    <UserAvatar/>
                </Grid>
                <Grid item lg={6} xs={12} md={4} sm={3} xl={2}>
                    <NameInput />
                </Grid>
            </Grid>
        </Grid>
    )
}