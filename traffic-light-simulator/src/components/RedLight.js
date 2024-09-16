import React from 'react';
import './RedLight.css';

const RedLight = ({ isActive }) => {
  return <div className={`light red ${isActive ? 'active' : ''}`} />;
};

export default RedLight;
