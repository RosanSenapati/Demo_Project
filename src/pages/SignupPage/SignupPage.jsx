import React from 'react'
import './SignUpPage.css'
import { Link } from 'react-router-dom'
function SignupPage() {
  return (
    <div className="wrapper shadow-lg ">
    <div className="title"><span>Sign-Up Form</span></div>
    <form action="#">
      <div className="row">
      <i class="bi bi-person-lines-fill"></i>
        <input type="text" placeholder="Full Name" required />
      </div>
      <div className="row">
      <i class="bi bi-person-circle"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div className="row">
      <i class="bi bi-lock"></i>
        <input type="password" placeholder="Password" className='form-control' required />
      </div>
      <div className="row">
      <i class="bi bi-lock-fill"></i>
        <input type="password" placeholder="Confirm Password" required />
      </div>
      <div className="row button">
        <input type="submit" value="Login" />
      </div>
      <div className="signup-link">Not a member? <Link to="/">Signup now</Link></div>
    </form>
  </div>
  )
}

export default SignupPage   