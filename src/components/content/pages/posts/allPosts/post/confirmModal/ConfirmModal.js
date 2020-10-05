import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PostsContext} from "../../../../../../../context/postsContext/PostsContext";
import {deletePostFromId} from "../../../../../../../helpers/querys";
import {isResponseOk} from "../../../../../../../helpers/middlewares";

export const ConfirmModal = ({modal, setOpen, index}) => {

    const posts = useContext(PostsContext)

    const handleClose = () => {
        setOpen({...modal, confirm: false});
    }

    const handleAgree = () => {
        setOpen({...modal, confirm: false});
        deletePostFromId(posts.data.posts[index]._id).then((res) => {
            isResponseOk(res.status, () => {
                posts.setPosts({isFetched: false})
            })
        })
    }

    return (
        <div>
            <Dialog
                open={modal.confirm}
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
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
