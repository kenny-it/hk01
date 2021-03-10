import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './GlobalStyle'
import Iconfont from './static/iconfont'
import Header from './common/header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Iconfont />
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
