import React from 'react';
import './List.css';

const List = props => {
  return (
    <div className="container">
      <div className="columns files flex-wrap">
        {props.flowers.map((flower, i) => (
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

export default List;
