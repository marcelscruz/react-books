// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// ***** Libraries ***** //
import axios from 'axios'
import Modal from 'react-modal'

// ***** Components ***** //
import ItemDetails from './ItemDetails'

const ItemModal = props => {
  const { fetchBooks, id, handleClearSelectedItem } = props

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
      isOpen={!!id}
      onRequestClose={handleClearSelectedItem}
      contentLabel="Selected option"
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
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
  id: PropTypes.number,
  handleClearSelectedItem: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
}

ItemModal.defaultProps = {
  id: undefined,
}

export default ItemModal
