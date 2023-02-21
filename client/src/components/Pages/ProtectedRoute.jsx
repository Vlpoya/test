import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children, isAllowed, redirect }) {
  console.log('======>>', isAllowed, redirect);
  return (!isAllowed) ? <Navigate to={redirect} /> : children || <Outlet />;
}
