import React from 'react';
import deathstar from '../images/deathstar.png';
import mFalcon from '../images/mfalcon.png';
import './spaceship.css';

class Spacechip extends React.Component {
  render () {
    return (
      <>
        <div id='spaceship1'>
          <img src={deathstar} alt="Deaths Star " />
        </div>
        <div id='spaceship2'>
          <img src={mFalcon} alt="Millenium Falcon" />
        </div>
      </>
    );
  };
};

export default Spacechip;