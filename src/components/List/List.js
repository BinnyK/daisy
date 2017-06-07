import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import R from 'ramda';
import './List.css';

const List = props => {

  // checkFlowerName :: BOOL -> returns true if flowerName contains searchTerm
  const checkFlowerName = (flowerName, searchTerm) => {
    return R.contains(searchTerm, flowerName)
  }

  // filterByName :: Array -> returns array of flowers that match name & searchterm
  const filterByName = (flowers, searchTerm) => {
    return flowers.filter(flower => {
      if (checkFlowerName(flower.name.toLowerCase(), searchTerm.toLowerCase())) {
        return flower;
      }
    })
  }

  // filterSearchTerm :: Array -> If empty returns flowers, otherwise returns filtered flowers
  const filterSearchTerm = (flowers, searchTerm) => {
    return R.isEmpty(searchTerm) ? flowers : filterByName(flowers, searchTerm)
  }


  const filteredFlowers = (flowers, filters) => {
    if (!R.isEmpty(filters)) {
      return flowers.filter(flower => {
        let count = 0;
        for(let i = 0; i < filters.length; i++) {
          if (flower.availability.includes(filters[i]) || flower.availability.includes("year")) {
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
      <div className="column flex-wrap main-content">
        {outputFlowers.map((flower) => (
          <div key={flower.name} className="list-box box">
            <img className="flower-image" src={flower.url} alt={flower.name}/>
            <div className="name">
              <h1>{flower.name}</h1>
            </div>
            <div className="timestamp">
              <small>{flower.months}</small>
            </div>
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
