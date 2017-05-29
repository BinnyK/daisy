import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div className="title is-2 has-text-centered">Overview</div>
      <div className="nav menu">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item is-tab is-active"><span className="icon-btn"><i className="fa fa-plus"></i></span></a>
            <a className="nav-item is-tab">
              <span className="icon-btn">
                <i className="fa fa-print"></i>
              </span>
            </a>
            <a className="nav-item is-tab">
              <span className="icon-btn thin">
                <i className="fa fa-lock"></i>
              </span>
            </a>
            <a className="nav-item is-tab">
              <span className="icon-btn">
                <i className="fa fa-trash"></i>
              </span>
            </a>
            <div className="nav-item is-tab">
              <strong>2 items selected</strong>
            </div>
          </div>
          <div className="nav-right is-hidden-mobile">
            <a className="nav-item is-tab">Name</a>
            <a className="nav-item is-tab">Size</a>
            <a className="nav-item is-tab">Views</a>
            <a className="nav-item"><span className=" button is-success">Uploaded</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
