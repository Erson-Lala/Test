import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = true; // You need to replace this line with your authentication logic.
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;

