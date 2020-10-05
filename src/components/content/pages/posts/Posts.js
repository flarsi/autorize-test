import React, {useContext} from "react";
import {Grid} from "@material-ui/core";
import "./Posts.scss"
import {NewPost} from "./newPosts/NewPost";
import {Post} from "./allPosts/post/Post";
import {PostsContext} from "../../../../context/PostsContext";
import {UserContext} from "../../../../context/UserContext";
import {getAllPostsFromUserId} from "../../../../helpers/querys";

export const Posts = () => {

    const posts = useContext(PostsContext)
    const user = useContext(UserContext)

    if(user.data.id && !posts.data.isFetched)
        getAllPostsFromUserId(user.data.id)
            .then((res) => {
                posts.setPosts({posts:res.data, isFetched: true})
            })

    return(
        <div className="posts">
            <Grid container direction={"row"} justify={"space-around"} className="userProfile">
                <Grid item container xs={12} justify={"center"}>
                    <NewPost/>
                </Grid>
                {posts.data.posts && posts.data.posts.map((elem, index) => (<Post key={index} index={index} data={elem}/>))}
            </Grid>
        </div>
    )
}