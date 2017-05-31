import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import './List.css';

const List = props => {

  const displayFlowers = props.filterArr.length > 0 ? props.filteredFlowers : props.flowers

  return (
    <div className="container">
      <div className="columns files flex-wrap">
        {displayFlowers.map((flower, i) => (
          <div key={i} className="column list-box">
            <a className="file">
              <div className="image is-3by2">
                <img src={flower.url} alt={flower.name}/>
              </div>
              <div className="name">{flower.name}</div>
              <div className="timestamp">{flower.availability.join(" ")}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const filterQueries = state.filter;
  return { 
    filteredFlowers: state.flowers.filter(flower => {
      for(let i = 0; i < filterQueries.length; i++) {
        if (flower.availability.includes(filterQueries[0])) {
          return flower
        }
      }
    }),
    flowers: state.flowers,
    filterArr: state.filter

    // filteredFlowers: state.flowers.filter(flower => {
    //   return filterQueries.forEach(query => {
    //     return flower.availability.includes(query) || flower.availability.includes('year')
    //   })
    // })
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
