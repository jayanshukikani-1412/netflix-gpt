import React from 'react'
import Login from '../LogIn/Login'
import HomePage from '../HomePage/HomePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const MainBody = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/',
            element: <HomePage/>
        }
    ])
  return (
    <div className='font-[Poppins]'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default MainBody
