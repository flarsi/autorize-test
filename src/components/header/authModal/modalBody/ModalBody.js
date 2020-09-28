import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import "./ModalBody.scss"
import {Login} from "./login/Login";
import {Register} from "./register/Register";

const TabPanel = ({ children, value, index }) => {

    return (
        <div
            role="tabpanel"
            className="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    )
}


export const ModalBody = ({handleClose}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="modal-body">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Log in"/>
                    <Tab label="Register"/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Login handleModalClose={handleClose}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register handleModalClose={handleClose}/>
            </TabPanel>
        </div>
    );
}
