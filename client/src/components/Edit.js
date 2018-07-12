// ***** React ***** //
import React, { Component } from 'react'

// ***** Libraries ***** //
import axios from 'axios'

// ***** Components ***** //
import Form from './Form'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {},
    }
  }

  // Method passed to Form as props
  onSubmit = book => {
    const { author, id, image, price, title } = book

    // Communicating directly to JSON Server
    axios
      .put(`http://localhost:3004/books/${id}`, {
        author,
        image,
        price,
        title,
      })
      .then(() => {
        // In success, return to List
        this.props.history.push('/')
      })
      .catch(error => {
        // In failure, log error
        console.log(error)
      })
  }

  componentDidMount() {
    const id = this.props.match.params.id // Find id from URL

    // Fetch requested item and set it in state to be passed to Form
    axios
      .get(`/api/v1/items/${id}`)
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
    const { book } = this.state
    return (
      <div className="section">
        <div className="section__header">
          <h1>Edit book</h1>
        </div>
        {/* Check if state is already set before rendering Form */}
        {book.id && <Form book={book} onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

export default Edit
