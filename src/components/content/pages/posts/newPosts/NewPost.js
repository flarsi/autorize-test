import React, {useContext, useState} from "react";
import "./NewPost.scss"
import TextField from "@material-ui/core/TextField";
import {TextArea} from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import {createNewPostQuery} from "../../../../../helpers/querys";
import {AlertContext} from "../../../../../context/AlertContext";
import {isResponseOk} from "../../../../../helpers/middlewares";
import {PostsContext} from "../../../../../context/PostsContext";
import Grid from "@material-ui/core/Grid";

export const NewPost = () => {

    const posts = useContext(PostsContext)
    const alert = useContext(AlertContext)

    const [post, setPost] = useState({title: '', fullText: '', description: ''})

    const postDataHandle = (event) => {
        setPost({...post, [event.target.id]: event.target.value})
    }

    const createNewPost = () => {
        if(post.title && post.fullText){
            if(post.fullText.length > 20){
                if(!posts.data.posts.some(el => el.title === post.title)){
                    createNewPostQuery(post).then((res) => {
                        isResponseOk(res.status, () => {
                            posts.setPosts({isFetched: false})
                        })
                    })
                }else {
                    alert.timeOutShow(4000,"Post with this name already is created")
                }
            }else {
                alert.timeOutShow(4000,"Full text min 20 chars")
            }
        }else{
            alert.timeOutShow(4000,"Type some in areas")
        }
    }

    return(
        <Grid item xs={6}>
            <div className="new-post">
                <TextField id="title" label="Title" onChange={postDataHandle}/>
                <TextArea rows={5} id="fullText" placeholder="Full text (min 20 chars)" onChange={postDataHandle}/>
                <TextArea rows={5} id="description" placeholder="Description" onChange={postDataHandle}/>

                <Button variant="contained" color="primary"  onClick={createNewPost}>
                    Create new post
                </Button>
            </div>
        </Grid>
    )
}