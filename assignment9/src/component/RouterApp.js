import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import RegForm from './RegForm'
import Dashboard from './Dashboard'


function RouterApp() {

  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/regForm', element: <RegForm /> },
    { path: '/dashboard', element: <Dashboard /> },
  ])
  return (
    <div className="wrapper">

      <RouterProvider router={router} />

    </div>
  )
}

export default RouterApp