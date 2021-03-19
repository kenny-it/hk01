import React, { Fragment } from 'react'
import Header from './common/header'
import Footer from './common/footer'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'


function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id"  component={Detail}></Route>
        </Switch>
        <Footer />
    </Fragment>
  );
}

export default App;
