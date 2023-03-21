import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const Protect = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('login');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default Protect;
