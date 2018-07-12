// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { id, title } = props.book
  const { handleSelectedItem } = props
  return (
    <div
      className="item"
      onClick={() => {
        handleSelectedItem(id)
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
