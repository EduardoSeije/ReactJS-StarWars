import React from 'react';
import deathstar from '../images/deathstar.png';
import mFalcon from '../images/mfalcon.png';
import './spaceship.css';

class Spacechip extends React.Component {
  render () {
    return (
      <>
      <div className="spaceship1">
        <img id='deathstar' src={deathstar} alt="Death Star" />
      </div>
      <div className="spaceship2">
        <img id='mFalcon' src={mFalcon} alt="Millenium Falcon" />
      </div>
      </>
    );
  };
};

export default Spacechip;