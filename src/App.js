import React, {useContext} from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import axios from "axios";
import {UserContext} from "./context/UserContext";
import {isResponseOk} from "./middlewares";
import {BrowserRouter} from "react-router-dom";


function App() {
    const user = useContext(UserContext)

    const token = localStorage.getItem("token")
    if(localStorage.getItem("token"))
        axios({
            method:"get",
            url: 'http://localhost:3001/api/v1/auth/user',
            headers: {
                Authorization: `Bearer ${token}`,

            },
        }).then((res) => {
            isResponseOk(res.status, () => {
                if(!user.data.isAuth){
                    user.isAuth()
                    user.setUserData({
                        email: res.data.email,
                        name: res.data.name,
                        id: res.data._id
                    })

                }
            })
        })

    console.log(user.data)
  return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Content/>
            </BrowserRouter>
        </div>
  );
}

export default App;
