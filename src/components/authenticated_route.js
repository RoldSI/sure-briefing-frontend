import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
  const { user } = useSelector(state => state.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default AuthenticatedRoute;