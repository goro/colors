import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ColorsApp from './reducers/main.js'
import Main from './containers/main.js'

let store = createStore(ColorsApp)

render(
  <Provider store={store}>
    <Main></Main>
  </Provider>,
  document.getElementById('app')
)
