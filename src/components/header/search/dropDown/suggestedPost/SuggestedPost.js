import React from "react";
import "./SuggestedPost.scss"
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export const SuggestedPost = ({data}) => {

    const history = useHistory();

    const goToPost = () => {
        history.push("/post/"+data._id);
    }

    return(
        <div className="suggested-post">
            <Button onClick={goToPost} variant="contained">{data.title}</Button>
        </div>
    )
}