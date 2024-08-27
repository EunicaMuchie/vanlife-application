import React from 'react';
import './mainButton.css'

const MainButton = ({ title }) => {
  return React.createElement(
    'button',
    { className: 'mainButton' },
    title
  );
};

export default MainButton;
