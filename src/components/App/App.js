import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import List from '../List/List';
import Header from '../Header/Header';

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
      </div>
    );
  }
}

export default App;
