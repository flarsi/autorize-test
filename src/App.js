import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import axios from "axios";

function App() {

    const [user, serUser] = useState();

    // axios.get('http://localhost:3001/api/v1/users')
    //     .then((res) => {
    //         console.log(res)
    //     })

    axios.post('http://localhost:3001/api/v1/users',
        {
            email: "test@gmail.com",
            password: "passwd",
            name: "test"
        })


  return (
    <div className="App">
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
