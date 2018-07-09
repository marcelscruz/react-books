import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ItemModal = props => (
  <Modal
    isOpen={!!props.selectedItem}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {/* {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>} */}
    <button
      className="button modal__button"
      onClick={props.handleClearSelectedOption}
    >
      Ok
    </button>
  </Modal>
)

ItemModal.propTypes = {
  selectedItem: PropTypes.number,
}

ItemModal.defaultProps = {
  selectedItem: undefined,
}

export default ItemModal
