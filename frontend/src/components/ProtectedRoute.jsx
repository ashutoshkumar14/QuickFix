import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem('quickfix_token');
  const rawUser = localStorage.getItem('quickfix_user') || localStorage.getItem('user');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && rawUser) {
    try {
      const parsed = JSON.parse(rawUser);
      const userRole = parsed.role || (parsed.user && parsed.user.role);
      if (userRole && userRole !== allowedRole && userRole !== 'admin') {
        return <Navigate to="/login" replace />;
      }
    } catch (e) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;