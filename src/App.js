import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './GlobalStyle'
import Iconfont from './static/iconfont'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Iconfont />
      <Provider store={store}>
       
      </Provider>
    </Fragment>
  );
}

export default App;
