import React from 'react';
import './GreenLight.css';

const GreenLight = ({ isActive }) => {
  return <div className={`light green ${isActive ? 'active' : ''}`} />;
};

export default GreenLight;
