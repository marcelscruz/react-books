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
    <ItemDetails selectedItemId={props.selectedItemId} />
    <button className="modal__button" onClick={props.handleClearSelectedItem}>
      Close
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
