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
    axios
      .get(`api/v1/items/${id}`)
      .then(res => {
        const book = res.data
        this.setState({
          book,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderBookDetails() {
    const { id, title, author, price, image } = this.state.book
    return (
      <div>
        <h2>ID: {id}</h2>
        <h2>Title: {title}</h2>
        <h2>Author: {author}</h2>
        <h2>Price: {price}0</h2>
        <div
          className="book-cover"
          style={{
            background: `url(${image}) no-repeat center center / cover`,
          }}
        />
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
