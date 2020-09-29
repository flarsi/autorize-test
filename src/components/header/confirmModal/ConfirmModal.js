import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {isResponseOk} from "../../../helpers/middlewares";
import {UserContext} from "../../../context/UserContext";

export default function ConfirmModal({dialog, setDialog, name}) {
    const user = useContext(UserContext)

    const handleClose = (answer) => {
        setDialog({...dialog, open: false});
        console.log(name)

        if(answer){
            axios({
                method:"patch",
                url: 'http://localhost:3001/api/v1/users/' + user.data.id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,

                },
                data:{
                    name: name
                }
            }).then((res) => {
                isResponseOk(res.status, () => {
                    if(!user.data.isAuth){
                        user.isAuth()
                        user.setUserData({name: name,})
                    }
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
