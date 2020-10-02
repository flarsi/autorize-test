import React, {useState} from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {ConfirmModal} from "./confirmModal/ConfirmModal";
import {CorrectModal} from "./correctModal/CorrectModal";

export const Post = ({data, index}) => {

    const [modal, setOpen] = useState({correct: false, confirm:false})

    const confirmModalOpen = () => {
        setOpen({...modal, confirm: true});
    }
    const correctModalOpen = () => {
        setOpen({...modal, correct: true});
    }

    return(
        <Card className="post">
            <CardActionArea>
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
    )
}