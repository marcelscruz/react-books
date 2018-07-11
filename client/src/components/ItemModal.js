import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import Modal from 'react-modal'
import ItemDetails from './ItemDetails'

class ItemModal extends Component {
  onDeleteBook = () => {
    const { selectedItemId, fetchBooks } = this.props
    this.props.handleClearSelectedItem()
    axios
      .delete(`http://localhost:3004/books/${selectedItemId}`)
      .then(res => {
        fetchBooks()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { selectedItemId, handleClearSelectedItem } = this.props

    return (
      <Modal
        isOpen={!!selectedItemId}
        onRequestClose={handleClearSelectedItem}
        contentLabel="Selected option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
      >
        <ItemDetails selectedItemId={selectedItemId} />
        <Link to={`/edit/${selectedItemId}`}>
          <button className="modal__button">Edit</button>
        </Link>
        <button className="modal__button" onClick={this.onDeleteBook}>
          Delete
        </button>
        <button className="modal__button" onClick={handleClearSelectedItem}>
          Close
        </button>
      </Modal>
    )
  }
}

ItemModal.propTypes = {
  selectedItemId: PropTypes.number,
  handleClearSelectedItem: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
}

ItemModal.defaultProps = {
  selectedItemId: undefined,
}

export default ItemModal
