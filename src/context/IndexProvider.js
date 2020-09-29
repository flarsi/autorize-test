import React from "react";
import {UserProvider} from "./UserContext";
import {AlertProvider} from "./AlertContext";

export const IndexProvider = ({children}) => (
    <AlertProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </AlertProvider>
)