import React,{useState} from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const [password, setPassword] = useState({email:"", newpassword: "",cnewpassword: "" })
  const [forget,setForget]=useState(false)
  let navigate=useNavigate()

  //form handle user login
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
      if (json.error) {
        alert(json.error)
      } else {
        localStorage.setItem("userDetails",JSON.stringify(json))
        if(JSON.parse(localStorage.getItem("userDetails")).name==="Admin"){
           navigate("/Users")
        }else{
          navigate("/")
        }
      }
  }
  const handleonchange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
  }

  //form handle forget password
  const handleForget=async(e)=>{
    e.preventDefault()
    const {email,newpassword,cnewpassword}=password
    if (password.length>=8 && newpassword===cnewpassword) {
     let responce= await fetch("http://localhost:8080/users/forgetpass", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {email, newpassword })
      })
      const json = await responce.json();
        if (json.error) {
          alert(json.error)
        } else {
           alert(json.success)
           setForget(false)
        }
    }else if(!newpassword===cnewpassword){
      alert("password and confirm password must be same")
    }else{
      alert("password must be 8 character")
    }
  }
  const handleForgetonchange = (e) => {
      setPassword({ ...password, [e.target.name]: e.target.value })
  }
  return (
    <div className='container-fluid logmain '>
      <div className='outer'>
      {
        !forget?(
          <>
        <h1 className='head mt-3'>WelCome</h1>
        <form onSubmit={handlesubmit} >  
        <label htmlFor="email" id='lb'>Enter Email</label><br />
        <input type="text" id='email' placeholder='Enter Email' onChange={handleonchange} name='email' /><br />
        <label htmlFor="password" id='lb'>Enter Password</label><br />
        <input type="text" id='password'placeholder='Enter Password' onChange={handleonchange} name='password' /> 
        <input type='submit' className='btn btn-primary btn2' value="login" />
        </form>
        <p className='p'><Link to="/singin">new register</Link> </p><br /><br />
        <p className='p' onClick={()=>setForget(true)}>Forget Password</p>
        </>
        ):(
          <>
          <h1 className='head mt-3'>Forget Password</h1>
          <form onSubmit={handleForget} >  
          <label htmlFor="email" id='lb'>Enter Email</label><br />
          <input type="text" id='email' placeholder='Enter Email' onChange={handleForgetonchange} name='email' /><br />
          <label htmlFor="pass" id='lb'>Enter New Password</label><br />
          <input type="password" id='pass' placeholder='New Paaword' onChange={handleForgetonchange} name='newpassword' /><br />
          <label htmlFor="cpassword" id='lb'>Enter Password</label><br />
          <input type="password" id='cpassword'placeholder='Confirm Password' onChange={handleForgetonchange} name='cnewpassword' /> 
          <input type='submit' className='btn btn-primary btn2'/>
          </form>
          <p className='p' onClick={()=>setForget(false)}>Back</p>
          </>
          )
        }
        </div>
    </div>
  )
}

export default Login
