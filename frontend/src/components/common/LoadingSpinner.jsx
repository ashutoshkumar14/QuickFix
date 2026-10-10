import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Loading services...', fullPage = false }) {
  return (
    <div className={`spinner-container ${fullPage ? 'full-page' : ''}`}>
      <div className="quickfix-spinner"></div>
      <p className="spinner-message">{message}</p>
    </div>
  );
}

export default LoadingSpinner;