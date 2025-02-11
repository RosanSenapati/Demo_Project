import React from 'react'
import './LoginSignUp.css'
import { Link } from 'react-router-dom'
export default function LoginSignUp() {
  return (
    <div className="wrapper shadow-lg ">
    <div className="title"><span>Login Form</span></div>
    <form action="#">
      <div className="row">
      <i className="bi bi-person-circle"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div className="row">
      <i className="bi bi-lock-fill"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div className="row button">
        <input type="submit" value="Login" />
      </div>
      <div className="signup-link">Not a member? <Link to="/signup">Signup now</Link></div>
    </form>
  </div>
  )
}