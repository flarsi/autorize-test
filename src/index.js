import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserProvider} from "./context/UserContext";
import {AlertProvider} from "./context/AlertContext";

ReactDOM.render(
    <AlertProvider>
      <UserProvider>
        <App/>
      </UserProvider>
    </AlertProvider>
  ,
  document.getElementById('root')
);
