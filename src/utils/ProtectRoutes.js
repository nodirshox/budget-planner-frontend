import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

export const ProtectRoutes = () => {
  const token = localStorage.getItem('accessToken')

  return token ? <Outlet /> : <Navigate to="/login" exact />
}
