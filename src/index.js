import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StylesProvider } from '@material-ui/core/styles'

import reportWebVitals from './reportWebVitals'

import store from './store/store'
import App from './App/App'
import GlobalStyle from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <GlobalStyle />
      <App />
    </StylesProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
