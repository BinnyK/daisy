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
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div>
        <div className="columns main-body">
          <div className="column aside">
            <aside className="menu aside is-fullheight is-hidden-mobile">  
              <SideBar updateSearchTerm={(search) => {this.setState({ search })}} />
            </aside>
          </div>  
          <div className="column">
            <Header
              updateSearchTerm={(search) => {this.setState({ search })}} 
            />
            <List searchTerm={this.state.search}/>
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

