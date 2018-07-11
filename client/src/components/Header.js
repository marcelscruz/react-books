import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <h1 className="header__title">The Book Centre</h1>
    <Link to="/add">
      <p className="header__button">Add</p>
    </Link>
  </div>
)

export default Header
