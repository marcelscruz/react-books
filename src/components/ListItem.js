import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { id, title } = props.book
  // console.log(props.book)
  return (
    // <Link to={`/book/${id}`}>
    <div>
      <h1>ID: {id}</h1>
      <h1>Title: {title}</h1>
    </div>
    // </Link>
  )
}

ListItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default ListItem
