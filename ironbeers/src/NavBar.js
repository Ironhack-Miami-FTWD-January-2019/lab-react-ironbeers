import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/random'>Random</Link></li>
        <li><Link to='/new-beer'>New</Link></li>

      </ul>
    </nav>
  )
}

export default navbar;