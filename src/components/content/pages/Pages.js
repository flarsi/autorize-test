import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {UserProfile} from "./userMenu/UserProfile";

export const Pages = () => {
    const pages = [
        {
            name: 'Home',
            link: '/',
            component: () => (<Home/>)
        },
        {
            name: 'UserProfile',
            link: '/profile',
            component: () => (<UserProfile/>)
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