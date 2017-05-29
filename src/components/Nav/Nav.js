import React from 'react';

const Nav = (props) => {

  return (
    <nav className="nav is-dark has-shadow" id="top">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item" href="../index.html">
            Daisy Girls
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu is-hidden-tablet">
          <a className="nav-item is-tab is-active">
            Dashboard
          </a>
          <a className="nav-item is-tab">
            Activity
          </a>
          <a className="nav-item is-tab">
            Timeline
          </a>
          <a className="nav-item is-tab">
            Folders
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
