import React, { useContext, useEffect } from 'react';
import TrafficLightContext from '../context/TrafficLightContext';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import './TrafficLight.css'; // Import the CSS file

const TrafficLight = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.timer > 0) {
        dispatch({
          type: 'CHANGE_LIGHT',
          payload: { light: state.currentLight, timer: state.timer - 1 },
        });
      } else {
        switchLight();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.currentLight, state.timer]);

  const switchLight = () => {
    let nextLight, nextTimer;

    if (state.currentLight === 'green') {
      nextLight = 'yellow';
      nextTimer = 3;
    } else if (state.currentLight === 'yellow') {
      nextLight = 'red';
      nextTimer = 7;
    } else {
      nextLight = 'green';
      nextTimer = 10;
    }

    if (state.pedestrianRequest && state.currentLight === 'red') {
      nextTimer = 5; // Extra 5 seconds for pedestrian
      dispatch({ type: 'RESET_PEDESTRIAN_REQUEST' });
    }

    dispatch({ type: 'CHANGE_LIGHT', payload: { light: nextLight, timer: nextTimer } });
  };

  return (
    <div className="traffic-light">
      <RedLight isActive={state.currentLight === 'red'} />
      <YellowLight isActive={state.currentLight === 'yellow'} />
      <GreenLight isActive={state.currentLight === 'green'} />
      <div className="timer">{state.timer}s</div>
    </div>
  );
};

export default TrafficLight;
