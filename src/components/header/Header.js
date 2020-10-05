import React, {useContext} from "react"
import "./Header.scss"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AuthModal} from "./authModal/AuthModal";
import {UserContext} from "../../context/userContext/UserContext";
import {UserMenu} from "./userMenu/UserMenu";
import {NavDrawer} from "./drawer/Drawer";
import { useLocation } from 'react-router-dom'

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
    const location = useLocation().pathname.replace('/', '').toUpperCase();

    console.log();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <div className="header">
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {location === '' ? "Home" : location}
                        </Typography>
                        {user.data.isAuth ?
                            <UserMenu/>
                            :
                            <AuthModal/>
                        }
                    </Toolbar>
                </AppBar>
                <NavDrawer open={open} handleDrawerClose={handleDrawerClose}/>
            </div>
        </div>
    )
}