import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Home from './containers/home';

export default (
  <div className="container">
    <Route exact path="/" component={Home}/>
  </div>
)