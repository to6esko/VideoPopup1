import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';


import App from './components/app';
import NavVideo from './components/pages/navVideo';


const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route>
            <Route path="/" component={App} />
            <IndexRoute component={NavVideo}/>
            </Route>
        </Router>
    , app);