import React, {useContext} from "react";
import "./Register.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {UserContext} from "../../../../../context/UserContext";
import {isResponseOk} from "../../../../../helpers/middlewares";
import {AlertContext} from "../../../../../context/AlertContext";
import {mailAuth, registerQuery} from "../../../../../helpers/querys";

export const Register = ({handleModalClose}) => {

    const user = useContext(UserContext)
    const alert = useContext(AlertContext)

    const authUser = () => {
        mailAuth(user).then(res => {
            isResponseOk(res.status, () => {
                user.setUserData({token: res.data.token})
                user.isAuth()
                if(user.data.stayInSystem){
                    localStorage.setItem('token', res.data.token)
                    handleModalClose()
                }
            })
        })
    }

    const registerUser = () => {
        registerQuery(user).then(res => {
            isResponseOk(res.status, () => {
                alert.timeOutShow(2000, "Register success")
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
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    checked={user.stayInSystem}
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