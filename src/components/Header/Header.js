import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="is-hidden-tablet">      
      <div className="field has-addons search-form">
        <p className="control search-input">
          <input className="input" type="text" placeholder="Search flower name" onChange={(e) => props.updateSearchTerm(e.target.value)} />
        </p>
      </div>
    </div>
  )
}

export default Header;
