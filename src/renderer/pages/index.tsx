import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Editor from './editor';
import Login from './login';

const AppRouter = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={ Editor } />
      <Route path="/login" component={ Login } />
    </div>
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));
