import { useState } from 'react'
import LoginSignUp from './pages/LoginSignup/LoginSignUp'
import SignupPage from './pages/SignupPage/SignupPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element: <LoginSignUp/>
  },
  {
    path:'/signup',
    element:<SignupPage/>
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
