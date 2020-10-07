import React, {useRef} from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import useTheme from "@material-ui/core/styles/useTheme";
import { useHistory } from "react-router-dom";
import "./Drawer.scss"
import Drawer from "@material-ui/core/Drawer";
import {useOutsideClick} from "../../../helpers/middlewares";



export const NavDrawer = ({open, setOpen}) => {
    const theme = useTheme();
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const drawerRef = useRef(null)

    useOutsideClick(drawerRef, () => {
        setOpen(false)
    })

    return(
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            id="drawer"
            ref={drawerRef}
        >
            <div>
                <IconButton onClick={handleClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={goToHome}>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                {['Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem disabled={true} button key={text} onClick={handleClose}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem disabled={true} button key={text} onClick={handleClose}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}