import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './GlobalStyle'
import Iconfont from './static/iconfont'
import Header from './common/header'
import Login from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Iconfont />
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
