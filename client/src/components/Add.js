import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'

class Add extends Component {
  onSubmit = book => {
    const { title, author, price, image } = book
    const parsedPrice = parseFloat(price)

    axios
      .post('http://localhost:3004/books', {
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

  render() {
    return (
      <div className="section">
        <div className="section__header">
          <h1>Add book</h1>
        </div>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Add
