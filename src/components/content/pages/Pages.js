import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {UserProfile} from "./userProfile/UserProfile";
import {Posts} from "./posts/Posts";
import {Post} from "./post/Post";

export const Pages = () => {
    const pages = [
        {
            name: 'Home',
            link: '/',
            component: Home
        },
        {
            name: 'UserProfile',
            link: '/profile',
            component: UserProfile
        },
        {
            name: 'UserPosts',
            link: '/posts',
            component: Posts
        },
        {
            name: 'PostPAge',
            link: '/post/:postId',
            component: Post
        }
    ]


    return(
        <Switch>
            {pages.map((element) => (
                <Route key={element.name} path={element.link} exact component={element.component}/>
            ))}
        </Switch>
    )
}