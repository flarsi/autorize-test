import React, {useContext, useEffect} from "react";
import "./AllPosts.scss"
import {PostsContext} from "../../../../../context/postsContext/PostsContext";
import {UserContext} from "../../../../../context/userContext/UserContext";
import {Post} from "./post/Post";
import {getAllPostsFromUserId} from "../../../../../helpers/querys";

export const AllPosts = () => {

    const posts = useContext(PostsContext)
    const user = useContext(UserContext)

    useEffect(() => {
        if(user.data.id && posts.data.isFetched !== 'user')
            getAllPostsFromUserId(user.data.id)
                .then((res) => {
                    posts.setPosts({posts:res.data, isFetched: 'user'})
                })
    }, [user, posts])


    return () => posts.data.posts && posts.data.posts.map((elem, index) => (<Post key={index} index={index} data={elem}/>))
}