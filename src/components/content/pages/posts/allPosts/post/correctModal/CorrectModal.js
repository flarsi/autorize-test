import React, {useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import "./CorrectModal.scss"
import {PostsContext} from "../../../../../../../context/PostsContext";
import {isResponseOk} from "../../../../../../../helpers/middlewares";
import {patchPostFromId} from "../../../../../../../helpers/querys";

export const CorrectModal = ({modal, setOpen, index}) => {

    const posts = useContext(PostsContext)
    const post = posts.data.posts[index]

    const [postData, setData] = useState({
        title: post.title,
        fullText: post.fullText,
        description: post.description
    })

    const handleClose = () => {
        setOpen({...modal, correct: false});
    }

    const dataHandler = (event) => {
        setData({...postData, [event.target.id]: event.target.value})
    }

    const handleAgree = () => {

        patchPostFromId(posts.data.posts[index]._id, postData)
            .then(res => {
                isResponseOk(res.status, () => {
                    setOpen({...modal, confirm: false});
                    posts.setPosts({isFetched: false})
                })
            })
    }


    return (
        <div>
            <Dialog
                open={modal.correct}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent className="dialog-content">
                    <TextField
                        id="title"
                        label="Post title"
                        defaultValue={post.title}
                        variant="outlined"
                        onChange={dataHandler}
                    />
                    <TextField
                        id="fullText"
                        label="Full text"
                        multiline
                        rows={4}
                        defaultValue={post.fullText}
                        variant="outlined"
                        onChange={dataHandler}
                    />
                    <TextField
                        id="description"
                        label="description"
                        multiline
                        rows={4}
                        defaultValue={post.description}
                        variant="outlined"
                        onChange={dataHandler}
                    />
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
