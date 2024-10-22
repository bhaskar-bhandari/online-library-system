import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/browseBooks'>Browser Books</Link>
      <Link to='/addBook'>Add Books</Link>
    </nav>
  )
}

export default NavBar;
