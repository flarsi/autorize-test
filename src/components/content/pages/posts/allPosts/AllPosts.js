import React, {useContext} from "react";
import "./AllPosts.scss"
import {PostsContext} from "../../../../../context/PostsContext";
import {UserContext} from "../../../../../context/UserContext";
import {Post} from "./post/Post";
import {getAllPostsFromUserId} from "../../../../../helpers/querys";

export const AllPosts = () => {

    const posts = useContext(PostsContext)
    const user = useContext(UserContext)

    if(user.data.id && !posts.data.isFetched)
        getAllPostsFromUserId(user.data.id)
            .then((res) => {
                posts.setPosts({posts:res.data, isFetched: true})
            })

    return(
        <div className="all-posts">

        </div>
    )
}