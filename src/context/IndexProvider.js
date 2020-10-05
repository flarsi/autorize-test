import React from "react";
import {UserProvider} from "./userContext/UserContext";
import {AlertProvider} from "./alertContext/AlertContext";
import {PostsProvider} from "./postsContext/PostsContext";

export const IndexProvider = ({children}) => (
    <AlertProvider>
        <UserProvider>
            <PostsProvider>
                {children}
            </PostsProvider>
        </UserProvider>
    </AlertProvider>
)