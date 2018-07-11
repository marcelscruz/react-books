import React, { Component } from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import SelectInput from './SelectInput'
import ItemModal from './ItemModal'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      count: 10,
      offset: 0,
      selectedItemId: undefined,
    }
  }

  fetchBooks() {
    const { count, offset } = this.state

    axios
      .get('/api/v1/items', {
        params: {
          count,
          offset,
        },
      })
      .then(res => {
        const books = res.data
        this.setState({
          books,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderBooksList() {
    const books = this.state.books

    return books.map((book, index) => (
      <div key={book.id}>
        <ListItem book={book} handleSelectedItem={this.handleSelectedItem} />
        {books.length !== index + 1 && <div className="list-item__separator" />}
      </div>
    ))
  }

  onCountChange = optionSelected => {
    const count = optionSelected.value
    this.setState({
      count,
    })
  }

  onOffsetChange = optionSelected => {
    const offset = optionSelected.value
    this.setState({
      offset,
    })
  }

  handleSearch = () => {
    console.log('search')
    console.log(this.state.count)
    console.log(this.state.offset)
    this.fetchBooks()
  }

  handleSelectedItem = id => {
    this.setState({
      selectedItemId: id,
    })
  }

  handleClearSelectedItem = () => {
    this.setState(() => ({
      selectedItemId: undefined,
    }))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { books, count, offset, selectedItemId } = this.state
    const countOptions = [
      { value: 0, label: 'All' },
      { value: 5, label: '5 Items' },
      { value: 10, label: '10 Items' },
      { value: 15, label: '15 Items' },
      { value: 20, label: '20 Items' },
    ]

    const offsetOptions = [
      { value: 0, label: 'None' },
      { value: 5, label: '5 Items' },
      { value: 10, label: '10 Items' },
      { value: 15, label: '15 Items' },
      { value: 20, label: '20 Items' },
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
          <p className="select-input__label">Skip</p>
          <SelectInput
            value={offset}
            onChange={this.onOffsetChange}
            options={offsetOptions}
          />

          <button className="list__filter__button" onClick={this.handleSearch}>
            Search
          </button>
        </div>

        {books.length === 0 ? (
          <h1>Fetching books...</h1>
        ) : (
          <div className="content-container">{this.renderBooksList()}</div>
        )}
        <ItemModal
          selectedItemId={selectedItemId}
          handleClearSelectedItem={this.handleClearSelectedItem}
        />
      </div>
    )
  }
}

export default List
