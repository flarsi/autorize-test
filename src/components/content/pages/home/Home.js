import React, {useContext, useEffect} from "react";
import {getAllPosts} from "../../../../helpers/querys";
import {isResponseOk} from "../../../../helpers/middlewares";
import {Grid} from "@material-ui/core";
import {Post} from "./post/Post";
import {UserContext} from "../../../../context/userContext/UserContext";
import {PostsContext} from "../../../../context/postsContext/PostsContext";

export const Home = () => {

    const user = useContext(UserContext)
    const posts = useContext(PostsContext)

    useEffect(() => {
        if(!posts.data.isFetched) {
            getAllPosts(user.data.token, user.data.isAuth)
            .then((res) => {
                isResponseOk(res.status, () => {
                    posts.setPosts({posts: res.data, isFetched: true})
                })
            })
        }
    },[user, posts])

    return(
        <Grid container justify={"space-around"} className="home" spacing={2}>
            {posts.data.posts && posts.data.posts.map((elem, index) => (
                <Post data={elem} key={index}/>
            ))}
        </Grid>
    )
}