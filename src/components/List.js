import React, { Component } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      offset: 2,
      count: 5,
    }
  }

  fetchBooks() {
    const { offset, count } = this.state

    axios.get(`/api/v1/items?_page=${offset}&_limit=${count}`).then(res => {
      const books = res.data
      this.setState({
        books,
      })
    })
  }

  renderBooksList() {
    return this.state.books.map(book => (
      <div key={book.id}>
        <ListItem book={book} />
      </div>
    ))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    console.log(this.state.books)
    return (
      <div>
        {this.state.books.length === 0 ? (
          <h1>fetching books...</h1>
        ) : (
          this.renderBooksList()
        )}
      </div>
    )
  }
}

export default List
