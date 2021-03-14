import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './GlobalStyle'
import Iconfont from './static/iconfont'
import Login from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(

    <Fragment>
      <GlobalStyle />
      <Iconfont />
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Provider>
      </BrowserRouter>
    </Fragment>,
  document.getElementById('root')
);

