import React from 'react';

const SideBar = (props) => {
  return (
    <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
      <div>
        <div className="uploader has-text-centered">
          <a className="button">
            <i className="fa fa-upload"></i>
          </a>
        </div>
        <div className="main">
          <div className="title">Main</div>
          <a href="#" className="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Flowers</span></a>
          <a href="#" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Bouquet</span></a>
          <a href="#" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">Timeline</span></a>
          <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
        </div>
      </div>
    </aside>
  )
}

export default SideBar;
