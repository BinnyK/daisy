import React from 'react';

const SideBar = (props) => {
  return (
    <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
      <div>
        <div className="uploader has-text-centered">
          <a className="nav-item" href="../index.html">
            Daisy Girls
          </a>
        </div>
        <div className="main">
          <div className="title">Flowers</div>
          <a href="#" className="item active">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">All year</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">January</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">February</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">March</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">April</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">May</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">June</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">July</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">August</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">September</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">October</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">November</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <label class="checkbox">
                <input type="checkbox" />
              </label>
            </span>
            <span className="name">December</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default SideBar;
