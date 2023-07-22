import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='container-fluid main '>
      <div className='outer'>
        <h1 className='head mt-3'>WelCome</h1>
        <form >  
        <label htmlFor="email" id='lb'>Enter Email</label><br />
        <input type="text" id='email' placeholder='Enter Email' /><br />
        <label htmlFor="password" id='lb'>Enter Password</label><br />
        <input type="text" id='password'placeholder='Enter Password' /> 
        <input className='btn btn-primary btn2' value="login" />
        </form>
        <p>new register</p>
      </div>
    </div>
  )
}

export default Login
