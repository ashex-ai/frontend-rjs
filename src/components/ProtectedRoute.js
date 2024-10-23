import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
