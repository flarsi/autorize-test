import React, {useState} from "react";
import "./Login.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

export const Login = ({setUser}) => {

    const [userData, setUserData] = useState({email: '', password: '', stayInSystem: false});

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

    const userDataHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
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
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={() => setUserData({...userData, stayInSystem: !userData.stayInSystem})}
                />
                <Typography variant="h6">stay in system</Typography>
            </div>
            <Button size="large" variant="contained" color="primary" onClick={authUser}>
                Log In
            </Button>
        </div>
    )
}