import { useState } from "react";
import MovieContext from "./Moviecontext";

const Moviestate = (props) => {
  const [details,setDetails]=useState({movie:"",thiator:"",address:"",time:"",seat:[]});
  let booking=()=>{
    console.log(details);
    setDetails({movie:"",thiator:"",address:"",time:"",seat:[]});
  }
  return (
    <MovieContext.Provider value={{details,setDetails,booking}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default Moviestate