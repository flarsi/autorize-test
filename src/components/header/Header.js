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
import {fade} from "@material-ui/core";
import {Search} from "./search/Searh";

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20rem',
        },
    },
}));

export const Header = () => {
    const classes = useStyles();
    const user = useContext(UserContext)

    let location = useLocation().pathname;
    location = location.slice(0, location.lastIndexOf('/')).replace("/", '')

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return(
        <div className="header">
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="toolbar">
                        <div className={"nav"}>
                            <IconButton id={"nav-btn--open"} onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {location === '' ? "Home" : location}
                            </Typography>
                        </div>

                        <Search classes={classes}/>

                        {user.data.isAuth ?
                            <UserMenu/>
                            :
                            <AuthModal/>
                        }
                    </Toolbar>
                </AppBar>
                <NavDrawer open={open} setOpen={setOpen}/>
            </div>
        </div>
    )
}