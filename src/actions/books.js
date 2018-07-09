import axios from 'axios'
import store from '../store/configure-store'

// SET_BOOKS

// Set initial state in the store
export const setBooks = books => ({
  type: 'SET_BOOKS',
  books,
})

// Fetch books from API and call setBooks
export const startSetBooks = () => {
  return axios.get('/books').then(res => {
    store.dispatch(setBooks(res.data))
  })
}
