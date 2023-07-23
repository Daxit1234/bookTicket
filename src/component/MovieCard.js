import React from 'react'
import img1 from "../images/no-poster.png"
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import "./MovieCard.css"

const MovieCard = ({title,imgurl,released,imdbrating,genre,imdbid}) => {
  const navigate=useNavigate()
  return (
    <div 
    onClick={()=>navigate(`datails/${imdbid}`)}
     style={{width: "18rem",marginTop:"20px"}}
     className='mcard'>
    <img src={imgurl} onError={(e)=>{e.target.onerror=null;e.target.src=img1}} height={300} className="card-img-top" alt="..."/>
    <div className="card-body text-light" style={{backgroundColor:"rgb(4,21,45)"}}>
         <h5 className="card-title">{title} || <Skeleton/></h5>
        <div className='d-flex justify-content-between'>
         <h5 className="card-title">{released}</h5>
         <h5 className="card-title"><i className="fa-solid fa-star text-warning"></i>{imdbrating? imdbrating :7.3}/10</h5>
        </div>
         <h5 className="card-title">{genre.map((item)=>
           <div>
              {item}
              <br />
           </div>
         )}</h5>
    </div>
  </div>
  )
}

export default MovieCard
