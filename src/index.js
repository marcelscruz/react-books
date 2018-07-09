import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import './styles/index.scss'
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
// registerServiceWorker()
