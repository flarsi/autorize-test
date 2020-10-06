import React, {useContext, useEffect, useState} from "react";
import {getAllPosts} from "../../../../helpers/querys";
import {isResponseOk} from "../../../../helpers/middlewares";
import {Grid} from "@material-ui/core";
import {Post} from "./post/Post";
import {UserContext} from "../../../../context/userContext/UserContext";

export const Home = () => {

    const user = useContext(UserContext)

    const[posts, setPosts] = useState({data: [], isFetched: false});

    useEffect(() => {
        if(!posts.isFetched) {
            getAllPosts(user.data.token, user.data.isAuth)
            .then((res) => {
                isResponseOk(res.status, () => {
                    setPosts({data: res.data, isFetched: true})
                })
            })

        }
        return () => {

        }
    },[user, posts])

    return(
        <Grid container justify={"space-around"} className="home" spacing={2}>
            {posts.data && posts.data.map((elem, index) => (
                <Post data={elem} key={index}/>
            ))}
        </Grid>
    )
}