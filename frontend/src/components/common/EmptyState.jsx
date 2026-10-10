import React from 'react';
import './EmptyState.css';

function EmptyState({ 
  icon = "🔎", 
  title = "No Results Found", 
  description = "We couldn't find what you were searching for. Try changing your filters or keywords.", 
  actionLabel, 
  onAction 
}) {
  return (
    <div className="empty-state-card">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {actionLabel && onAction && (
        <button className="empty-state-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;