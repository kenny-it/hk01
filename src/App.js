import React, { Fragment } from 'react'
import Header from './common/header'
import Footer from './common/footer'
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
        <Footer />
    </Fragment>
  );
}

export default App;
