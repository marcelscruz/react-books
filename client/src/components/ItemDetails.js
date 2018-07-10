import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class ItemDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: [],
    }
  }

  componentDidMount() {
    const id = this.props.selectedItemId
    axios.get(`api/v1/items/${id}`).then(res => {
      const book = res.data
      this.setState({
        book,
      })
      console.log(res)
    })
  }

  renderBookDetails() {
    const book = this.state.book
    return (
      <div>
        <h2>ID: {book.id}</h2>
        <h2>Title: {book.title}</h2>
        <h2>Author: {book.author}</h2>
        <h2>Price: {book.price}</h2>
      </div>
    )
  }

  render() {
    const book = this.state.book
    return (
      <div>
        {book.length === 0 ? <h1>Loading book</h1> : this.renderBookDetails()}
      </div>
    )
  }
}

ItemDetails.propTypes = {
  selectedItemId: PropTypes.number,
}

ItemDetails.defaultProps = {
  selectedItemId: undefined,
}

export default ItemDetails
