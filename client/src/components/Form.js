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
      id: props.book.id,
      title: props.book.title,
      author: props.book.author,
      price: props.book.price,
      image: props.book.image,
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

    const { id, title, author, price, image } = this.state

    // Method passed as props, will communicate to JSON Server
    this.props.onSubmit({
      id,
      title,
      author,
      price,
      image,
    })
  }

  render() {
    return (
      <div className="content-container">
        <form className="form">
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
  onSubmit: PropTypes.func.isRequired,
  book: PropTypes.object,
}

Form.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
    price: '',
    image: '',
  },
}
