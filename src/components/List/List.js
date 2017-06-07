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

  // filterBySearch :: Array -> If empty returns flowers, otherwise returns filtered flowers
  const filterBySearch = (flowers, searchTerm) => {
    return R.isEmpty(searchTerm) ? flowers : filterByName(flowers, searchTerm)
  }

  // checkMonthExist :: BOOL -> returns true if 
  const checkMonthExist = (months, flowerMonths) => months.every(elem => flowerMonths.indexOf(elem) > -1)

  // filteredFlowers :: Array -> returns filtered list of flowers based on month availability
  const filteredFlowers = (flowers, months) => {
    return flowers.filter(flower => {
      if (checkMonthExist(months, flower.availability) || 
          checkMonthExist(['year'], flower.availability)
      ) {
        return flower;
      }
    })
  }
  
  const filteredFlowersList = filteredFlowers(props.flowers, props.filterArr);
  const outputFlowers = filterBySearch(filteredFlowersList, props.searchTerm);

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
