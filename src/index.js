// ***** React ***** //
import React from 'react'
import ReactDOM from 'react-dom'

// ***** Redux ***** //
import store from './store/configure-store'
import { Provider } from 'react-redux'

// ***** Actions ***** //
// import { startSetBooks } from './actions/books'

// ***** Styles ***** //
import './styles/index.scss'

// ***** Components ***** //
import AppRouter from './router/AppRouter'

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// Render loader
ReactDOM.render(jsx, document.getElementById('root'))
// ReactDOM.render(<h1>Fetching books...</h1>, document.getElementById('root'))

// Provide routes with access to the store

// Render app
// const renderApp = () => {
//   ReactDOM.render(jsx, document.getElementById('root'))
// }

// Set fetched books in the store and then render app
// startSetBooks().then(() => {
//   renderApp()
// })
