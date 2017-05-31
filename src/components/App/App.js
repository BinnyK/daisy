import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import List from '../List/List';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="columns">
          <SideBar />
          <div className="content column is-10">
            <Header />
            <List />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    flowers: state.flowers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

