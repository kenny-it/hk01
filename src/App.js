import React, { Fragment } from 'react'
import Header from './common/header'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
            <Route path="/home" exact>
              <div>Home</div>
            </Route>
        </Switch>
    </Fragment>
  );
}

export default App;
