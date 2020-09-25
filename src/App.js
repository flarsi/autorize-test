import React from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import axios from "axios";
import {UserProvider} from "./context/UserContext";

function App() {

    axios({
            method:"post",
            url: 'http://localhost:3001/api/v1/auth/user',
            headers: {
                Authorization: "Bearer"
            },
            data: {
                token: localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res)
    })

console.log(localStorage.getItem("token"))

  return (
        <div className="App">
            <UserProvider>
                <Header/>
                <Content/>
            </UserProvider>
        </div>
  );
}

export default App;
