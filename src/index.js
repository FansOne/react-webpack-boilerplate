import React from 'react'
import ReactDOM from 'react-dom'
import App from './app';
import './assets/img/favicon.ico'
import axios from "./services/httpRequest";
 
React.Component.prototype.$axios = axios;


ReactDOM.render(<App />, document.getElementById('app'));