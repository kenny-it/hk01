import React, { Fragment } from 'react'
import Header from './common/header'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
            <Route path="/" component={Home}>
            </Route>
        </Switch>
    </Fragment>
  );
}

export default App;
