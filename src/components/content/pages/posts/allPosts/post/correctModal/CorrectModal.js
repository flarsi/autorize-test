import React, {useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import "./CorrectModal.scss"
import {PostsContext} from "../../../../../../../context/postsContext/PostsContext";
import {isResponseOk} from "../../../../../../../helpers/middlewares";
import {patchPostFromId, updatePostImg} from "../../../../../../../helpers/querys";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

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

    const changePostImg = (event) => {
        const eventFile = event.target.files[0]
        const formData = new FormData();
        formData.append("image", eventFile, "image.png");
        updatePostImg(post._id, formData).then((res) => {
            isResponseOk(res.status, () =>{
                posts.setPostById({index, data:res.data})
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
                <DialogActions className="action-buttons">
                    <div>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={handleAgree} color="primary">
                            Agree
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            component="label"
                            className={"userAvatar--change-btn"}
                        >
                            <input
                                type="file"
                                style={{ display: "none" }}
                                accept=".jpg, .jpeg, .png"
                                onChange={changePostImg}
                            />
                            <InsertPhotoIcon/>
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
