/* eslint-disable import/extensions */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import RApp from './RApp.jsx';

// TODO refactor this back to a functional component
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/listing/:id">
            <App />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
