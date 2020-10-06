import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {isResponseOk} from "../../../helpers/middlewares";
import {UserContext} from "../../../context/userContext/UserContext";
import {bearerAuth, patchUserById} from "../../../helpers/querys";

export default function ConfirmModal({dialog, setDialog, name}) {
    const user = useContext(UserContext)

    const handleClose = (answer) => {
        setDialog({...dialog, open: false});

        if(answer){
            patchUserById(user.data.id, name, user.data.token && user.data.token)
                .then((res) => {
                isResponseOk(res.status, () => {
                    bearerAuth(user.data.token && user.data.token).then((res) => {
                        isResponseOk(res.status, () => {
                            user.setUserData({
                                email: res.data.email,
                                name: res.data.name,
                                id: res.data._id
                            })
                        })
                    })
                })
            })
        }
    };

    return (
        <div>
            <Dialog
                open={dialog.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you agree?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {handleClose(false)}} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => {handleClose(true)}} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
