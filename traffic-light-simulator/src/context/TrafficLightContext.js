import React, { createContext, useReducer } from 'react';

const initialState = {
  currentLight: 'green',
  timer: 10,
  pedestrianRequest: false,
};

const CHANGE_LIGHT = 'CHANGE_LIGHT';
const REQUEST_CROSSING = 'REQUEST_CROSSING';
const RESET_PEDESTRIAN_REQUEST = 'RESET_PEDESTRIAN_REQUEST';

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      return {
        ...state,
        currentLight: action.payload.light,
        timer: action.payload.timer,
      };
    case REQUEST_CROSSING:
      return {
        ...state,
        pedestrianRequest: true,
      };
    case RESET_PEDESTRIAN_REQUEST:
      return {
        ...state,
        pedestrianRequest: false,
      };
    default:
      return state;
  }
};

const TrafficLightContext = createContext();

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export default TrafficLightContext;
