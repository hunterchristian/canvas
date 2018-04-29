import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Editor from './editor';
import Login from './login';

const AppRouter = (
  <Router>
    <div>
      <Route exact path="/" component={ Editor } />
      <Route path="/login" component={ Login } />
    </div>
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));
