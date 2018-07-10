import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import ItemDetails from './ItemDetails'

const ItemModal = props => (
  <Modal
    isOpen={!!props.selectedItemId}
    onRequestClose={props.handleClearSelectedItem}
    contentLabel="Selected option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected book</h3>
    <ItemDetails selectedItemId={props.selectedItemId} />
    <button
      className="button modal__button"
      onClick={props.handleClearSelectedItem}
    >
      Ok
    </button>
  </Modal>
)

ItemModal.propTypes = {
  selectedItemId: PropTypes.number,
  handleClearSelectedItem: PropTypes.func.isRequired,
}

ItemModal.defaultProps = {
  selectedItemId: undefined,
}

export default ItemModal
