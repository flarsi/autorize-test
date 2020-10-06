import React, {useContext, useEffect, useState} from "react";
import "./NameInput.scss"
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import CreateIcon from '@material-ui/icons/Create';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from '@material-ui/core/styles';
import {UserContext} from "../../../../../context/userContext/UserContext";
import ConfirmModal from "../../../../header/confirmModal/ConfirmModal";

export const NameInput = () => {

    const user = useContext(UserContext)

    const [name, setName] = useState({correct: false, text: ''})

    useEffect(() => {
        if(user.data){
            setName({correct: false, text: user.data.name})
        }
    },[user])

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    const handleCorrect = () => {
        setName({...name, correct: !name.correct})
    }

    const changeName = (event) => {
        setName({...name, text: event.target.value})
    }

    const cancel = (event) => {
        event.target.innerHTML = user.data.name
        setName({...name, text: user.data.name, correct: !name.correct})
    }

    const [dialog, setDialog] = React.useState({open: false});

    const handleOpen = () => {
        setDialog({...dialog, open: true});
    };

    return (
        <div className={"name-input"}>
            {name.text &&
            <Input onChange={changeName} value={name.text} disabled={!name.correct} inputProps={{ 'aria-label': 'description' }} />
            }
            {name.correct ?
                <div>
                    <ThemeProvider theme={theme}>
                        <IconButton onClick={() => {handleCorrect(); handleOpen();}} color="primary" aria-label="upload picture" component="span">
                            <CheckIcon/>
                        </IconButton>
                    </ThemeProvider>

                    <IconButton onClick={(event) => {cancel(event)}} color="secondary" aria-label="upload picture" component="span">
                        <ClearIcon/>
                    </IconButton>
                </div>
            :
                <IconButton onClick={handleCorrect} className={"correct"} color="primary" aria-label="upload picture" component="span">
                    <CreateIcon/>
                </IconButton>
            }

            <ConfirmModal name={name.text} dialog={dialog} setDialog={setDialog}/>
        </div>
    )
}