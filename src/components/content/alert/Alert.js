import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import {AlertContext} from "../../../context/alertContext/AlertContext";
import Alert from "@material-ui/lab/Alert";
import "./Alert.scss"

export const ActionAlert = () => {

    const alert = useContext(AlertContext)


    return(
        <Collapse in={alert.data.show} className="alert-container">
            <Alert className={"alert"}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={alert.closeAlert}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {alert.data.text}
            </Alert>
        </Collapse>
    )
}