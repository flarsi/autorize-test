import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import {AlertContext} from "../../../context/AlertContext";

export const Alert = () => {

    const alert = useContext(AlertContext)


    return(
        <Collapse in={alert.data.show}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={alert.timeOutShow}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                Close me!
            </Alert>
        </Collapse>
    )
}