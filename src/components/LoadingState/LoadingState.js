import React from 'react';
import logo from '../../logo.svg';
import './LoadingState.scss';

function LoadingState() {

  return (
    <div className="Fallback">
        <header className="Fallback-container flex-center">
        <img src={logo} className="Fallback-icon" alt="Icon" />
        <p>
            Loading Website...
        </p>
        </header>
    </div>
  );
}

export default LoadingState;
