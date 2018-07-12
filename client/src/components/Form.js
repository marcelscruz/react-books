// ***** React ***** //
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// ***** Util ***** //
import { history } from '../router/AppRouter'

class Form extends Component {
  constructor(props) {
    super(props)

    // Either use default props or props passed from Edit
    this.state = {
      author: props.book.author,
      id: props.book.id,
      image: props.book.image,
      price: props.book.price,
      title: props.book.title,
    }
  }

  // Handle title input change
  onTitleChange = e => {
    const title = e.target.value
    this.setState({
      title,
    })
  }

  // Handle author input change
  onAuthorChange = e => {
    const author = e.target.value
    this.setState({
      author,
    })
  }

  // Handle price input change
  onPriceChange = e => {
    const price = e.target.value
    this.setState({
      price,
    })
  }

  // Handle image input change
  onImageChange = e => {
    const image = e.target.value
    this.setState({
      image,
    })
  }

  // Handle form submit
  onSubmit = e => {
    e.preventDefault() // Avoid page refresh caused by form submit

    const { author, id, image, price, title } = this.state
    const { onSubmit } = this.props
    const parsedPrice = parseFloat(price) // Price is passed as string from Form

    // Method passed as props, will communicate to JSON Server
    onSubmit({
      author,
      id,
      image,
      price: parsedPrice,
      title,
    })
  }

  render() {
    return (
      <div className="content-container">
        <form className="form">
          <div className="input__box">
            <label>Title</label>
            <input
              autoFocus
              className="form__input"
              onChange={this.onTitleChange}
              placeholder="Insert title"
              required
              type="text"
              value={this.state.title}
            />
          </div>

          <div className="input__box">
            <label>Author</label>
            <input
              className="form__input"
              onChange={this.onAuthorChange}
              placeholder="Insert author"
              required
              type="text"
              value={this.state.author}
            />
          </div>

          <div className="input__box">
            <label>Price</label>
            <input
              className="form__input"
              onChange={this.onPriceChange}
              placeholder="Insert price"
              required
              type="number"
              value={this.state.price}
            />
          </div>

          <div className="input__box">
            <label>Image URL</label>
            <input
              className="form__input"
              onChange={this.onImageChange}
              placeholder="Insert image URL"
              required
              type="text"
              value={this.state.image}
            />
          </div>

          <div className="form__buttons__container">
            <button className="form__button" onClick={this.onSubmit}>
              Save
            </button>
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
  book: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  book: {
    author: '',
    id: '',
    image: '',
    price: '',
    title: '',
  },
}
