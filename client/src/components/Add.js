// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import axios from 'axios'

// ***** Components ***** //
import Form from './Form'

const Add = ({ history }) => {
  // Method passed to Form as props
  const onSubmit = book => {
    const { author, image, price, title } = book

    // Communicating directly to JSON Server
    axios
      .post('http://localhost:3004/books', {
        author,
        image,
        price,
        title,
      })
      .then(() => {
        // In success, return to List
        history.push('/')
      })
      .catch(error => {
        // In failure, log error
        console.log(error)
      })
  }

  return (
    <div className="section">
      <div className="section__header">
        <h1>Add book</h1>
      </div>
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default Add
