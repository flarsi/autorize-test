import React, {useState} from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {ConfirmModal} from "./confirmModal/ConfirmModal";
import {CorrectModal} from "./correctModal/CorrectModal";
import {Grid} from "@material-ui/core";
import "./Post.scss"
import CardMedia from "@material-ui/core/CardMedia";

export const Post = ({data, index}) => {

    const [modal, setOpen] = useState({correct: false, confirm:false})

    const confirmModalOpen = () => {
        setOpen({...modal, confirm: true});
    }
    const correctModalOpen = () => {
        setOpen({...modal, correct: true});
    }

    return(
        <Grid item lg={4}  md={4} sm={6} xl={6} xs={12} className="allPost-post">
            <Card>
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
                <CardActions>
                    <Button size="small" color="primary" onClick={correctModalOpen}>
                        Correct
                    </Button>
                    <Button size="small" color="secondary" onClick={confirmModalOpen}>
                        Delete
                    </Button>

                    <div>
                        <ConfirmModal modal={modal} setOpen={setOpen} index={index}/>
                        <CorrectModal modal={modal} setOpen={setOpen} index={index}/>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}