import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Singin.css"

const Singin = () => {
  const [user,setUser]=useState({name:"", email: "", password: "",cpassword:"" })
  const handlesubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,cpassword}=user
    if(password.length>=8 && password===cpassword){
      const responce = await fetch("http://localhost:8080/users/createuser", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password })
      });
      const json = await responce.json();
      if (json.code) {
        alert("email id already exist")
      }
    }else if (password===cpassword) {
      alert("password must be 8 character")  
    }else{
      alert("password must be same")
    }
    
}
  const handleonchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
}
  return (
    <div className='container-fluid singmain '>
    <div className='singouter'>
      <h1 className='singhead mt-3'>Registration</h1>
      <form onSubmit={handlesubmit}>  
      <label htmlFor="user" id='slb'>Enter Username</label><br />
      <input className='input' name='name' type="text" id='user' placeholder='Enter Username'  onChange={handleonchange} /><br />
      <label htmlFor="email" id='slb'>Enter Email</label><br />
      <input className='input' name='email' type="text" id='email'placeholder='Enter Email'  onChange={handleonchange}/> 
      <label htmlFor="pass" id='slb'>Enter Password</label><br />
      <input className='input' name='password' type="password" id='pass'placeholder='Enter Email' onChange={handleonchange} /> 
      <label htmlFor="cpass" id='slb'>Confirm Password</label><br />
      <input className='input' name='cpassword' type="password" id='pass'placeholder='Co-Password' onChange={handleonchange} /> 
      <input type='submit' className='btn btn-primary btn2' value="Sing In" />
      {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
      </form>
      <p className='p'><Link to="/login">already Register</Link> </p>
    </div>
  </div>
  )
}

export default Singin
