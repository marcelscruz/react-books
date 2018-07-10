import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { history } from '../router/AppRouter'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      price: '',
      image: '',
    }
  }

  onTitleChange = e => {
    const title = e.target.value
    this.setState({
      title,
    })
  }

  onAuthorChange = e => {
    const author = e.target.value
    this.setState({
      author,
    })
  }

  onPriceChange = e => {
    const price = e.target.value
    this.setState({
      price,
    })
  }

  onImageChange = e => {
    const image = e.target.value
    this.setState({
      image,
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { title, author, price, image } = this.state

    console.log('title', title)
    console.log('author', author)
    console.log('price', price)
    console.log('image', image)

    this.props.onSubmit({
      title,
      author,
      price,
      image,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form__input"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
            autoFocus
            required
          />
          <input
            type="text"
            className="form__input"
            placeholder="Author"
            value={this.state.author}
            onChange={this.onAuthorChange}
            required
          />
          <input
            type="number"
            className="form__input"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onPriceChange}
            required
          />
          <input
            type="text"
            className="form__input"
            placeholder="Image link"
            value={this.state.image}
            onChange={this.onImageChange}
            required
          />

          <div className="form__buttons">
            <button className="button">Save</button>
            <button
              className="button"
              onClick={() => {
                history.push('/')
              }}
            >
              Go back
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
