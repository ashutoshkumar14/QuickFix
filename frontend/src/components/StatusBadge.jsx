import React from 'react';
import './StatusBadge.css';

function StatusBadge({ status }) {
  const cleanStatus = status ? status.toLowerCase() : 'pending';

  let badgeClass = 'status-pending';
  let label = status;

  if (cleanStatus.includes('progress')) {
    badgeClass = 'status-progress';
    label = '⚡ In Progress';
  } else if (cleanStatus.includes('accepted')) {
    badgeClass = 'status-accepted';
    label = '👍 Accepted';
  } else if (cleanStatus.includes('complete')) {
    badgeClass = 'status-completed';
    label = '✓ Completed';
  } else if (cleanStatus.includes('cancel')) {
    badgeClass = 'status-cancelled';
    label = '✕ Cancelled';
  } else {
    badgeClass = 'status-pending';
    label = '⏳ Pending Assignment';
  }

  return <span className={`status-badge ${badgeClass}`}>{label}</span>;
}

export default StatusBadge;