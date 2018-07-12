// ***** React ***** //
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

// ***** Libraries ***** //
import createHistory from 'history/createBrowserHistory'

// ***** Components ***** //
import Add from '../components/Add'
import App from '../components/App'
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
