import React from 'react'
import { Link } from 'react-router-dom'
import "./Singin.css"

const Singin = () => {
  return (
    <div className='container-fluid singmain '>
    <div className='singouter'>
      <h1 className='singhead mt-3'>Registration</h1>
      <form>  
      <label htmlFor="user" id='slb'>Enter Username</label><br />
      <input className='input' type="text" id='user' placeholder='Enter Username' /><br />
      <label htmlFor="email" id='slb'>Enter Email</label><br />
      <input className='input' type="text" id='email'placeholder='Enter Email' /> 
      <label htmlFor="pass" id='slb'>Enter Password</label><br />
      <input className='input' type="password" id='pass'placeholder='Enter Email' /> 
      <label htmlFor="cpass" id='slb'>Confirm Password</label><br />
      <input className='input' type="password" id='pass'placeholder='Co-Password' /> 
      <input className='btn btn-primary btn2' value="Sing In" />
      </form>
      <p className='p'><Link to="/login">already Register</Link> </p>
    </div>
  </div>
  )
}

export default Singin
