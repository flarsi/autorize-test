import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import {AlertContext} from "../../../context/AlertContext";
import Alert from "@material-ui/lab/Alert";

export const ActionAlert = () => {

    const alert = useContext(AlertContext)


    return(
        <Collapse in={alert.data.show}>
            <Alert
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
            // {/*<button onClick={alert.timeOutShow}>showAlert</button>*/}
    )
}