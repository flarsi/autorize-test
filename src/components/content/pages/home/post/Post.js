import React from "react";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Post.scss"
import {useHistory} from "react-router-dom";

export const Post = ({data}) => {
    const history = useHistory();

    const goToPostPage = () => {
        history.push("/post/"+data._id);
    }

    return(
        <Grid item lg={4} md={6} sm={12} xl={12} xs={12} className="post" onClick={goToPostPage}>
            <Card>
                {data &&
                <CardActionArea>
                    <CardMedia
                        image={"http://localhost:3001"+data.image}
                        title="post img"
                        className="card-image"
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h3">
                                {data.fullText}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardMedia>
                </CardActionArea>
                }
            </Card>
        </Grid>
    )
}