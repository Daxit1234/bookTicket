import React,{useState} from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })

  const handlesubmit = async (e) => {
      e.preventDefault();
      const {email,password}=user
      const responce = await fetch("http://localhost:8080/users/login", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password })
      });
      const json = await responce.json();
      console.log(json)
      if (json.error) {
        alert(json.error)
      } else {
        
      }
  }
  const handleonchange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <div className='container-fluid logmain '>
      <div className='outer'>
        <h1 className='head mt-3'>WelCome</h1>
        <form onSubmit={handlesubmit} >  
        <label htmlFor="email" id='lb'>Enter Email</label><br />
        <input type="text" id='email' placeholder='Enter Email' onChange={handleonchange} name='email' /><br />
        <label htmlFor="password" id='lb'>Enter Password</label><br />
        <input type="text" id='password'placeholder='Enter Password' onChange={handleonchange} name='password' /> 
        <input type='submit' className='btn btn-primary btn2' value="login" />
        </form>
        <p className='p'><Link to="/singin">new register</Link> </p>
      </div>
    </div>
  )
}

export default Login
