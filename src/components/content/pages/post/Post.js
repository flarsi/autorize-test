import React, {useEffect, useState} from "react";
import {getPostById, getUserById} from "../../../../helpers/querys";
import {useParams} from "react-router-dom";
import {isResponseOk} from "../../../../helpers/middlewares";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./Post.scss"
import {Grid} from "@material-ui/core";

export const Post = () => {

    const locationParams = useParams()

    const [post, setPost] = useState({data: {}, isFetched: false})
    const [user, setUser] = useState({data: {}, isFetched: false})

    useEffect(() => {
        if(!post.isFetched){
            getPostById(locationParams.postId)
                .then((res) => {
                    isResponseOk(res.status, () => {
                        setPost({data: res.data, isFetched: true})
                        if(!user.isFetched) {
                            getUserById(res.data.postedBy)
                                .then((res) => {
                                    isResponseOk(res.status, () => {
                                        setUser({data: res.data, isFetched: true})
                                    })
                                })
                        }
                    })
                })
        }
    }, [locationParams, post, user])

    return(
        <Grid container item justify={"space-between"} direction={"row"} xs={12} spacing={4}>
            <Grid item lg={6} md={6} sm={12} xl={12} xs={12}>
                <Card className={"post-data"}>
                    <CardActionArea>
                        <CardMedia
                            image={"http://localhost:3001"+post.data.image}
                            title="post img"
                            className="card-image"
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Post: {post.data.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="h3">
                                    {post.data.fullText}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.data.description}
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xl={12} xs={12}>
                <Card className={"user-data"}>
                    <CardActionArea>
                        <CardMedia
                            image={"http://localhost:3001"+user.data.avatar}
                            title="post img"
                            className="card-image"
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Posted by: {user.data.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="h3">
                                    {user.data.email}
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}