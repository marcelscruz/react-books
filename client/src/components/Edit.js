import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {},
    }
  }

  onSubmit = book => {
    const { id, title, author, price, image } = book
    const parsedPrice = parseFloat(price)

    axios
      .put(`http://localhost:3004/books/${id}`, {
        title,
        author,
        price: parsedPrice,
        image,
      })
      .then(res => {
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    const id = this.props.match.params.id

    axios
      .get(`/api/v1/items/${id}`)
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

  render() {
    const book = this.state.book
    return (
      <div className="section">
        <div className="section__header">
          <h1>Edit book</h1>
        </div>
        {/* Checks if state is already filled before rendering Form */}
        {this.state.book.id && <Form onSubmit={this.onSubmit} book={book} />}
      </div>
    )
  }
}

export default Edit
