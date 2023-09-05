import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import DashboardLayout from './components/layouts/DashboardLayout'
import './App.css'
import PageNotFound from './pages/404/PageNotFound'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ProtectRoutes } from './utils/ProtectRoutes'
import Logout from './pages/auth/Logout'

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  )
}
