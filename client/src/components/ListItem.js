// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { id, title } = props.book
  return (
    <div
      className="item"
      onClick={() => {
        props.handleSelectedItem(id)
      }}
    >
      <h1>
        {id} - {title}
      </h1>
    </div>
  )
}

ListItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleSelectedItem: PropTypes.func.isRequired,
}

export default ListItem
