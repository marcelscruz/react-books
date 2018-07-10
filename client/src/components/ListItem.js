import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { id, title } = props.book
  return (
    <div
      onClick={() => {
        props.handleSelectedItem(id)
      }}
    >
      <h1>ID: {id}</h1>
      <h1>Title: {title}</h1>
    </div>
  )
}

ListItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default ListItem
