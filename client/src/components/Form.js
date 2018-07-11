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
      <div className="content-container">
        <form onSubmit={this.onSubmit} className="form">
          <div className="input__box">
            <label>Title</label>
            <input
              type="text"
              className="form__input"
              placeholder="Insert title"
              value={this.state.title}
              onChange={this.onTitleChange}
              autoFocus
              required
            />
          </div>

          <div className="input__box">
            <label>Author</label>
            <input
              type="text"
              className="form__input"
              placeholder="Insert author"
              value={this.state.author}
              onChange={this.onAuthorChange}
              required
            />
          </div>

          <div className="input__box">
            <label>Price</label>
            <input
              type="number"
              className="form__input"
              placeholder="Insert price"
              value={this.state.price}
              onChange={this.onPriceChange}
              required
            />
          </div>

          <div className="input__box">
            <label>Image URL</label>
            <input
              type="text"
              className="form__input"
              placeholder="Insert image URL"
              value={this.state.image}
              onChange={this.onImageChange}
              required
            />
          </div>

          <div className="form__buttons__container">
            <button className="form__button">Save</button>
            <button
              className="form__button"
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
