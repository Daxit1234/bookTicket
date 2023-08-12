import { useState } from "react";
import MovieContext from "./Moviecontext";

const Moviestate = (props) => {
  const [details,setDetails]=useState({movieName:"",thiatorName:"",address:"",time:"",seat:[]});
  const [userTikets,setUserTikets]=useState({})
  const host = "http://localhost:8080"
  const name={
    userName:"daxit godhani bharatbai",
    email:"daxitgodhani203@gmail.com"
  }
  
  //book tikets
  let booking=async()=>{  
     await fetch(`http://localhost:8080/ticket/addticket`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({...details,...name})
       }).then(res=>res.json()).then(e=>console.log(e))
     setDetails({movieName:"",thiatorName:"",address:"",time:"",seat:[]});
    }

    console.log(userTikets)
  //get data from table
  let getdata=async()=>{
   await fetch("http://localhost:8080/ticket/getticket/daxitgodhani203@gmail.com")
   .then(res=>res.json()).then(e=>setUserTikets(e))
  }

  //detele tikets
  let deleteData=async()=>{
      await fetch("http://localhost:8080/ticket/delete/64d630bfe2a8f4806cd9f992",{
        method:'DELETE'
       })
    getdata();
  }
  return (
    <MovieContext.Provider value={{details,setDetails,booking}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default Moviestate