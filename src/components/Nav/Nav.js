import React from 'react';
import './Nav.css';

const Nav = (props) => {

  return (
    <nav className="nav has-shadow" id="top">
      <div className="container">
        <div className="nav-center">
          <a className="nav-item is-hidden-tablet" href="../index.html">
            SEASONAL PICKS
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
