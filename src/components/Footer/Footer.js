import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="has-text-centered">
          <p>
            <strong>Flowers guide</strong> by <a href="https://binnyk.github.io">BinnyK</a>
          </p>
          <p>
            Code
          </p>
          <a className="icon" href="https://github.com/BinnyK/daisy">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
