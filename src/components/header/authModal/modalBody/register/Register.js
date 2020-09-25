import React, {useState} from "react";
import "./Register.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

export const Register = ({setUser}) => {

    const [userData, setUserData] = useState({email: '', password: '', name: '', stayInSystem: false});

    const authUser = () => {
        axios({
            method:"post",
            url: 'http://localhost:3001/api/v1/auth',
            data: {
                email: userData.email,
                password: userData.password
            }
        }).then(res => {
            if(res.status === 200){
                setUser({token: res.data.token})
                if(userData.stayInSystem){
                    localStorage.setItem('token', res.data.token)
                }
            }else{
                console.log(res)
            }
        })
    }

    const registerUser = () => {
        axios({
            method:"post",
            url: 'http://localhost:3001/api/v1/users',
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password
            }
        }).then(res => {
            if(res.status === 200){
                localStorage.clear()
                authUser()
            }else{
                console.log(res)
            }
        })
    }

    const userDataHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
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
                />
                <Typography variant="h6">stay in system</Typography>
            </div>
            <Button size="large" variant="contained" color="primary" onClick={registerUser}>
                Register
            </Button>
        </div>
    )
}