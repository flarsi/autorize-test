import React, {useContext} from "react";
import "./Register.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {UserContext} from "../../../../../context/UserContext";
import {isResponseOk} from "../../../../../middlewares";

export const Register = ({handleModalClose}) => {

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

    const registerUser = () => {
        axios({
            method:"post",
            url: 'http://localhost:3001/api/v1/users',
            data: {
                name: user.data.name,
                email: user.data.email,
                password: user.data.password
            }
        }).then(res => {
            isResponseOk(res.status, () => {
                authUser()
            })
        })
    }

    const userDataHandler = (event) => {
        user.setUserData({...user.data, [event.target.name]: event.target.value})
    }

    return(
        <div className="register">
            <TextField id="standard-basic" label="Name" name="name" onChange={userDataHandler}/>
            <TextField id="standard-basic" label="Email" name="email" onChange={userDataHandler}/>
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
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={user.changeStayInSystem}
                />
                <Typography variant="h6">stay in system</Typography>
            </div>
            <Button size="large" variant="contained" color="primary" onClick={registerUser}>
                Register
            </Button>
        </div>
    )
}