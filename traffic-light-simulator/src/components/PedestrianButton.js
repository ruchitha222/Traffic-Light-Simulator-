import React, { useContext } from 'react';
import TrafficLightContext from '../context/TrafficLightContext';
import './PedestrianButton.css';

const PedestrianButton = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  const handlePedestrianClick = () => {
    if (state.currentLight === 'green' || state.currentLight === 'yellow') {
      dispatch({ type: 'REQUEST_CROSSING' });
    }
  };

  return (
    <button onClick={handlePedestrianClick} className="pedestrian-button">
      Pedestrian Crossing {state.pedestrianRequest ? '(Requested)' : ''}
    </button>
  );
};

export default PedestrianButton;
