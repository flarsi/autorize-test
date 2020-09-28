import React, {useContext} from "react"
import "./Header.scss"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AuthModal} from "./authModal/AuthModal";
import {UserContext} from "../../context/UserContext";
import {UserMenu} from "./userMenu/UserMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const Header = () => {
    const classes = useStyles();
    const user = useContext(UserContext)

    return(
        <div className="header">
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        {user.data.isAuth ?
                            <UserMenu/>
                            :
                            <AuthModal/>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

