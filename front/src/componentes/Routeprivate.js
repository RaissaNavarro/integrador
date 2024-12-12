import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('accessToken'); // vai ver se o usuario ja tinha entrado 

  return isAuthenticated ? <Component /> : <Navigate to='/' />;
};


export default PrivateRoute;
