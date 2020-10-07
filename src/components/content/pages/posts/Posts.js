import React, {useContext, useEffect} from "react";
import {Grid} from "@material-ui/core";
import "./Posts.scss"
import {NewPost} from "./newPosts/NewPost";
import {Post} from "./allPosts/post/Post";
import {PostsContext} from "../../../../context/postsContext/PostsContext";
import {UserContext} from "../../../../context/userContext/UserContext";
import {getAllPostsFromUserId} from "../../../../helpers/querys";

export const Posts = () => {

    const posts = useContext(PostsContext)
    const user = useContext(UserContext)

    useEffect(() => {
        if(user.data.id && posts.data.isFetched !== 'user')
            getAllPostsFromUserId(user.data.id)
                .then((res) => {
                    posts.setPosts({
                        posts: res.data, isFetched: 'user'
                    })
                    console.log("test")
                })
    }, [posts, user])


    return(
        <div className="posts">
            <Grid container direction={"row"} justify={"space-around"} spacing={2} className="userProfile">
                <Grid item container xs={12} justify={"center"}>
                    <NewPost/>
                </Grid>
                {posts.data.posts &&
                    posts.data.posts.map((elem, index) => (
                        <Post key={index} index={index} data={elem}/>
                    ))}
            </Grid>
        </div>
    )
}