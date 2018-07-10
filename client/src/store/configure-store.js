import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import booksReducer from '../reducers/books'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Initialize and export store
export default createStore(
  combineReducers({
    books: booksReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
)
