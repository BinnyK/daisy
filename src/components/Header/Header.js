import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="container">
      <div className="title is-2 has-text-centered">Flowers</div>
      
      <div className="field has-addons search-form">
        <p className="control search-input">
          <input className="input" type="text" placeholder="Search flower name" onChange={(e) => props.updateSearchTerm(e.target.value)} />
        </p>
        <p className="control">
          <a className="button is-primary">
            Search
          </a>
        </p>
      </div>
    </div>
  )
}

export default Header;
