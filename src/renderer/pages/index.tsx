import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import Editor from './Editor';
import Login from './Login';

const AppRouter = (
  <Router>
    <div>
      <Route exact path="/" component={ Editor } />
      <Route path="/login" component={ Login } />
    </div>
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));
