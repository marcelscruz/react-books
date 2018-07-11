// ***** React ***** //
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

// ***** Libraries ***** //
import createHistory from 'history/createBrowserHistory'

// ***** Components ***** //
import App from '../components/App'
import Add from '../components/Add'
import Edit from '../components/Edit'

export const history = createHistory()

// Define app routes
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </Router>
)

export default AppRouter
