import React from 'react';
import { TrafficLightProvider } from '../../traffic-light-simulator/src/context/TrafficLightContext';
import TrafficLight from '../../traffic-light-simulator/src/components/TrafficLight';
import PedestrianButton from '../../traffic-light-simulator/src/components/PedestrianButton';
import './App.css';

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <TrafficLight />
        <PedestrianButton />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
