import React from "react";
import {Pages} from "./pages/Pages";
import {ActionAlert} from "./alert/Alert";


export const Content = () => {

    return(
        <div className="content">
            <ActionAlert/>
            <Pages/>
        </div>
    )
}
