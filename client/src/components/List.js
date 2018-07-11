// ***** React ***** //
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// ***** Libraries ***** //
import axios from 'axios'

// ***** Components ***** //
import ListItem from './ListItem'
import SelectInput from './SelectInput'
import ItemModal from './ItemModal'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      count: 10,
      offset: 1,
      selectedItemId: undefined,
      offsetOptions: [{}],
    }
  }

  // Handle fetching books list
  fetchBooks = () => {
    const { count, offset } = this.state

    // Fetch all books passing count and offset for pagination functionality
    axios
      .get('/api/v1/items', {
        params: {
          count,
          offset,
        },
      })
      .then(res => {
        // In success, set fetched items and pages number in state
        const { books, pages } = res.data
        this.setState({
          books,
        })
        // Call method to generate list of available pages
        this.pagination(pages)
      })
      .catch(error => {
        // In failure, log error
        console.log(error)
      })
  }

  // Generate list of available pages used by SelectInput for offset
  pagination = pages => {
    const offsetOptions = []

    for (let i = 1; i <= pages; i++) {
      offsetOptions.push({
        value: i,
        label: `${i}`,
      })
    }

    this.setState({
      offsetOptions,
    })
  }

  // Render list of books
  renderBooksList() {
    const books = this.state.books

    return (
      <div className="content-container">
        {books.map((book, index) => (
          <div key={book.id}>
            <ListItem
              book={book}
              handleSelectedItem={this.handleSelectedItem}
            />
            {/* Add a separator between all items */}
            {books.length !== index + 1 && (
              <div className="list-item__separator" />
            )}
          </div>
        ))}
      </div>
    )
  }

  // Handle count change, set page back to 1 and fetch books list with new range
  onCountChange = optionSelected => {
    const count = optionSelected.value
    this.setState(
      {
        count,
        offset: 1,
      },
      () => {
        this.fetchBooks()
      },
    )
  }

  // Handle offset change and fetch books list with new range
  onOffsetChange = optionSelected => {
    const offset = optionSelected.value
    this.setState(
      {
        offset,
      },
      () => {
        this.fetchBooks()
      },
    )
  }

  // Handle selected item which triggers modal opening
  handleSelectedItem = id => {
    this.setState({
      selectedItemId: id,
    })
  }

  // Clear selected item which triggers modal closing
  handleClearSelectedItem = () => {
    this.setState(() => ({
      selectedItemId: undefined,
    }))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const {
      books,
      count,
      offset,
      offsetOptions,
      selectedItemId: id,
    } = this.state

    const countOptions = [
      { value: 0, label: 'All books' },
      { value: 5, label: '5 books' },
      { value: 10, label: '10 books' },
      { value: 15, label: '15 books' },
      { value: 20, label: '20 books' },
    ]

    return (
      <div className="list">
        <div className="list__filter">
          <p className="select-input__label">Show</p>
          <SelectInput
            value={count}
            onChange={this.onCountChange}
            options={countOptions}
          />

          <p className="select-input__label">Page</p>
          <SelectInput
            value={offset}
            onChange={this.onOffsetChange}
            options={offsetOptions}
          />

          <Link to="/add">
            <p className="add__button">Add</p>
          </Link>
        </div>
        {/* Check if state is already set before rendering books list  */}
        {books.length === 0 ? (
          <h1>Fetching books...</h1>
        ) : (
          this.renderBooksList()
        )}
        <ItemModal
          id={id}
          handleClearSelectedItem={this.handleClearSelectedItem}
          fetchBooks={this.fetchBooks}
        />
      </div>
    )
  }
}

export default List
