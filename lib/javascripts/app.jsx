import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ColorsApp from './reducers/ColorsApp.js'
import Main from './containers/Main.js'

let store = createStore(ColorsApp)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
