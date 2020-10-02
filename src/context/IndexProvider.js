import React from "react";
import {UserProvider} from "./UserContext";
import {AlertProvider} from "./AlertContext";
import {PostsProvider} from "./PostsContext";

export const IndexProvider = ({children}) => (
    <AlertProvider>
        <UserProvider>
            <PostsProvider>
                {children}
            </PostsProvider>
        </UserProvider>
    </AlertProvider>
)