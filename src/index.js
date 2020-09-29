import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IndexProvider} from "./context/IndexProvider";

ReactDOM.render(
    <IndexProvider>
        <App/>
    </IndexProvider>
  ,
  document.getElementById('root')
);
