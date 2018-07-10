import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App from '../components/App'
// import Item from '../components/Item'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        {/* <Route path="/book/:id" component={Item} /> */}
      </Switch>
    </div>
  </Router>
)

export default AppRouter