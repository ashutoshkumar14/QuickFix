import React from 'react';
import './AlertBanner.css';

function AlertBanner({ type = 'info', title, message, onDismiss }) {
  const icons = {
    error: '⚠️',
    success: '✓',
    warning: '⚡',
    info: 'ℹ️'
  };

  return (
    <div className={`alert-banner-box alert-${type}`}>
      <span className="alert-symbol">{icons[type] || 'ℹ️'}</span>
      <div className="alert-content-area">
        {title && <strong className="alert-title">{title}</strong>}
        <span className="alert-message">{message}</span>
      </div>
      {onDismiss && (
        <button className="alert-dismiss-btn" onClick={onDismiss} aria-label="Dismiss alert">
          ✕
        </button>
      )}
    </div>
  );
}

export default AlertBanner;