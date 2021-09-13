import React from 'react';
import './tableships.css';
import dest from '../images/dest.png';
import ship2 from '../images/ship2.png';

class TableShips extends React.Component {
  render () {
    return (
      <>
        <div id='ship1'>
          <img src={dest} alt="Imperial destroyer" />
        </div>
        <div id='ship2'>
          <img src={ship2} alt="Star Wars Ship" />
        </div>
      </>
    );
  };
};

export default TableShips;