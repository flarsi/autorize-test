import React, {useContext, useState} from "react";
import "./UserMenu.scss"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {UserContext} from "../../../context/UserContext";
import {AlertContext} from "../../../context/AlertContext";

export const UserMenu = () => {

    const user = useContext(UserContext)
    const alert = useContext(AlertContext)

    const [anchorEl, setAnchorEl] = useState("");
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl("");
    };

    const logOut = () => {
        handleClose();
        user.logOut();
        localStorage.clear()
        alert.timeOutShow(5000, "log out");
        window.location.href = "/";
    }


    return (
        <div className="user-menu">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to={"/profile"}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}>My posts</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
