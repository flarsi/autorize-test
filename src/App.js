import React, {useContext} from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {UserContext} from "./context/userContext/UserContext";
import {isResponseOk} from "./helpers/middlewares";
import {BrowserRouter} from "react-router-dom";
import "./App.css"
import {bearerAuth} from "./helpers/querys";

function App() {
    const user = useContext(UserContext)

    if(localStorage.getItem("token") && !user.data.name)
        bearerAuth().then((res) => {
            isResponseOk(res.status, () => {
                if(!user.data.isAuth){
                    user.isAuth()
                    user.setUserData({
                        email: res.data.email,
                        name: res.data.name,
                        id: res.data._id,
                        avatar: res.data.avatar
                    })
                }
            })
        })

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
