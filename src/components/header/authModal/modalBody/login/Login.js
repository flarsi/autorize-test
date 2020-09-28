import React, {useContext} from "react";
import "./Login.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {UserContext} from "../../../../../context/UserContext";
import {isResponseOk} from "../../../../../middlewares";

export const Login = ({handleModalClose}) => {
    const user = useContext(UserContext)

    const authUser = () => {
        axios({
            method:"post",
            url: 'http://localhost:3001/api/v1/auth',

            data: {
                email: user.data.email,
                password: user.data.password
            }
        }).then(res => {
            isResponseOk(res.status, () => {
                user.setUserData({token: res.data.token})
                if(user.data.stayInSystem){
                    localStorage.setItem('token', res.data.token)
                    handleModalClose()
                }
            })
        })
    }

    const userDataHandler = (event) => {
        user.setUserData({...user.data, [event.target.name]: event.target.value})
    }

    return(
        <div className="login">
            <TextField id="standard-basic" label="email" name="email" onChange={userDataHandler}/>
            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                name="password"
                onChange={userDataHandler}
            />
            <div className="checkbox">
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    checked={user.stayInSystem}
                    onChange={user.changeStayInSystem}
                />
                <Typography variant="h6">stay in system</Typography>
            </div>
            <Button size="large" variant="contained" color="primary" onClick={authUser}>
                Log In
            </Button>
        </div>
    )
}