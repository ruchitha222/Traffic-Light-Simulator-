import React from 'react';
import './YellowLight.css';

const YellowLight = ({ isActive }) => {
  return <div className={`light yellow ${isActive ? 'active' : ''}`} />;
};

export default YellowLight;
