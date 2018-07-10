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
      offset: 5,
      page: 1,
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
  }

  renderBooksList() {
    return this.state.books.map(book => (
      <div key={book.id}>
        <ListItem book={book} handleSelectedItem={this.handleSelectedItem} />
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
    console.log('item clicked', id)
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
    const options = [
      { value: 5, label: '5 Items' },
      { value: 10, label: '10 Items' },
      { value: 15, label: '15 Items' },
      { value: 20, label: '20 Items' },
    ]

    return (
      <div>
        <SelectInput
          defaultValue={count}
          onChange={this.onCountChange}
          options={options}
        />

        <SelectInput
          defaultValue={offset}
          onChange={this.onOffsetChange}
          options={options}
        />

        <button onClick={this.handleSearch}>Search</button>

        {books.length === 0 ? (
          <h1>fetching books...</h1>
        ) : (
          this.renderBooksList()
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
