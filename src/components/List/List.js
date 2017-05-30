import React from 'react';
import './List.css';

const List = props => {
  return (
    <div className="container">
      <div className="columns files flex-wrap">
        {props.flowers.flower.map((flower, i) => (
          <div key={i} className="column list-box">
            <a className="file">
              <div className="image is-3by2">
                <img src={flower.url} />
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

export default List;
