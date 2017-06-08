import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import months from './months';
import './SideBar.css';

class SideBar extends Component {

  render() {
    return (
        <div id="sideBar">
          <div className="header has-text-centered">
            <a className="nav-item">
              SEASONAL PICKS
            </a>
          </div>
          <div className="field search-form">
            <p className="control search-input">
              <input className="input" type="text" placeholder="Search flower" onChange={(e) => this.props.updateSearchTerm(e.target.value)} />
            </p>
          </div>
          <div className="main">
            <div className="title">Seasonal Availability</div>
            
            {months.map((month) => (
              <div className="field" key={month.name}>
                <p className="control">
                  <label className="checkbox" >
                    <input className="checkbox-month" type="checkbox" onChange={() => {
                      this.props.toggleFilter(month.abbr);
                    }} />
                    {month.name}
                  </label>
                </p>
              </div>
              
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
