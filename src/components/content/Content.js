import React from "react";
import {Pages} from "./pages/Pages";
import {Alert} from "./alert/Alert";

export const Content = () => {

    return(
        <div className="content">
            <Alert/>
            <Pages/>
        </div>
    )
}