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
    console.log('details mounted')
    axios.get(`api/v1/items/${id}`).then(res => {
      const book = res.data
      console.log(book)
      this.setState({
        book,
      })
    })
  }

  render() {
    const book = this.state.book
    return (
      <div>
        {book.length === 0 ? <h1>Loading book</h1> : <h1>{book.id}</h1>}
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
