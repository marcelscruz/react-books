// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// ***** Libraries ***** //
import axios from 'axios'
import Modal from 'react-modal'

// ***** Components ***** //
import ItemDetails from './ItemDetails'

const ItemModal = props => {
  const { fetchBooks, handleClearSelectedItem, id } = props

  // Handle item deletion
  const onDelete = () => {
    // Communicating directly to JSON Server
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then(() => {
        // In success, close modal and fetch updated books list
        handleClearSelectedItem()
        fetchBooks()
      })
      .catch(error => {
        // In failure, log error
        console.log(error)
      })
  }

  return (
    <Modal
      ariaHideApp={false}
      className="modal"
      closeTimeoutMS={200}
      contentLabel="Selected option"
      isOpen={!!id}
      onRequestClose={handleClearSelectedItem}
    >
      <ItemDetails id={id} />
      <Link to={`/edit/${id}`}>
        <button className="modal__button">Edit</button>
      </Link>
      <button className="modal__button" onClick={onDelete}>
        Delete
      </button>
      <button className="modal__button" onClick={handleClearSelectedItem}>
        Close
      </button>
    </Modal>
  )
}

ItemModal.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  handleClearSelectedItem: PropTypes.func.isRequired,
  id: PropTypes.number,
}

ItemModal.defaultProps = {
  id: undefined,
}

export default ItemModal
