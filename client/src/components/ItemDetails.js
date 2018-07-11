// ***** React ***** //
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// ***** Libraries ***** //
import axios from 'axios'

class ItemDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {},
    }
  }

  // Render book details
  renderBookDetails() {
    const { author, id, image, price, title } = this.state.book
    let parsedPrice = price.toFixed(2) // Add second digit in case it's missing

    return (
      <div className="item-details">
        <div className="item-details__picture">
          <div
            className="book-cover"
            style={{
              background: `url(${image}) no-repeat center center / cover`,
            }}
          />
        </div>
        <div className="item-details__description">
          <h3>ID: {id}</h3>
          <h3>Title: {title}</h3>
          <h3>Author: {author}</h3>
          <h3>Price: {parsedPrice}</h3>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { id } = this.props
    console.log(id)

    // Fetch requested item and set it in state
    axios
      .get(`api/v1/items/${id}`)
      .then(res => {
        // In success, set fetched item in state
        const book = res.data
        this.setState({
          book,
        })
      })
      .catch(error => {
        // In failure, log error
        console.log(error)
      })
  }

  render() {
    const book = this.state.book
    return (
      <div>
        {/* Check if state is already set before rendering book details */}
        {book.id && this.renderBookDetails()}
      </div>
    )
  }
}

ItemDetails.propTypes = {
  id: PropTypes.number,
}

ItemDetails.defaultProps = {
  id: undefined,
}

export default ItemDetails
