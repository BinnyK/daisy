import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import months from './months';

class SideBar extends Component {

  render() {
    return (
        <div>
          <div className="header has-text-centered">
            <a className="nav-item" href="../index.html">
              Daisy Girls
            </a>
          </div>
          <div className="main">
            <div className="title">Availability</div>
            
            {months.map((month, i) => (
              <a href="#" className="item" key={i}>
                <span className="icon">
                  <label className="checkbox">
                    <input type="checkbox" onChange={() => {
                      this.props.addFilter(month.abbr);
                    }} />
                  </label>
                </span>
                <span className="name">{month.name}</span>
              </a>
            ))}

          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    flowers: state.flowers,
    filterArr: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
