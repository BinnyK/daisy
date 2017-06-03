import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import './List.css';

const List = props => {

  const filterSearchTerm = (flowers, searchTerm) => {
    if (searchTerm.length > 0) {
      return flowers.filter(flower => {
        if (flower.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return flower;
        }
      })
    } else {
      return flowers;
    }
  }

  const filteredFlowers = (flowers, filters) => {
    if (filters.length > 0) {
      return flowers.filter(flower => {
        let count = 0;
        for(let i = 0; i < filters.length; i++) {
          if (flower.availability.includes(filters[i])) {
            count += 1;
          } else {
            count = 0;
          }
          if (count == filters.length) {
            return flower;
          }
        }
      })
    } else {
      return flowers;
    }
  }
  
  const filteredFlowersList = filteredFlowers(props.flowers, props.filterArr);
  const outputFlowers = filterSearchTerm(filteredFlowersList, props.searchTerm);



  return (
    <div className="columns">
      <div className="column flex-wrap">
        {outputFlowers.map((flower) => (
          <div key={flower.name} className="list-box">
            <a>
              <img className="flower-image" src={flower.url} alt={flower.name}/>
              <div className="name">{flower.name}</div>
              <div className="timestamp">{flower.months}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    flowers: state.flowers,
    filterArr: state.filter
    // filteredFlowers: state.filteredFlowers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
