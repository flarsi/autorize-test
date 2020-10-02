import React from "react";
import {Grid} from "@material-ui/core";
import "./Posts.scss"
import {NewPost} from "./newPosts/NewPost";
import {AllPosts} from "./allPosts/AllPosts";

export const Posts = () => {

    return(
        <div className="posts">
            <Grid container direction={"row"} justify={"space-around"} className="userProfile">
                <Grid item container direction={"row"} justify={"space-between"} xs={5} className="userInfo">
                    <AllPosts/>
                </Grid>
                <Grid item container xs={5} >
                    <NewPost/>
                </Grid>
            </Grid>
        </div>
    )
}