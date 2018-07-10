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
      <div>
        <h1>Add page</h1>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Add
