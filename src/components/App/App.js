import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import List from '../List/List';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import flowers from '../../flowers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: flowers
    }
  }

  filterList(month) {
    const newList = this.state.flowers.filter(flower => {
      return flower.availability.includes(month) || flower.availability.includes('year');
    });
    this.setState({
      flowers: newList
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="columns">
          <SideBar filterList={() => this.filterList()} />
          <div className="content column is-10">
            <Header />
            <List flowers={this.state.flowers}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
