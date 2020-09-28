import React from 'react';
import Modal from '@material-ui/core/Modal';
import "./AuthModal.scss"
import Button from "@material-ui/core/Button";
import {ModalBody} from "./modalBody/ModalBody";


export const AuthModal = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className="login" color="inherit" onClick={handleOpen}>Log in</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal-window">
                    <ModalBody handleClose={handleClose}/>
                </div>
            </Modal>
        </div>
    );
}