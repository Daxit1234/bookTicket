import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import img1 from "../../images/no-poster.png";
import "./Details.css";
import CircleProgress from "../../component/CircleProgress";
import MovieContext from "../../context/Moviecontext";
import DetailsSkeleton from "../../component/Skeleton/DetailsSkeleton";


function Details() {
  const { imdbid } = useParams();
  const { data, loading } = useFetch(`gettitleDetails?imdbid=${imdbid}`);
  const navigate=useNavigate();
  const {details,setDetails}=useContext(MovieContext);
  let SelectTime=()=>{
    setDetails({...details,movie:data?.title})
    navigate("/locationTime")
  }
  return (
    <>
      <div style={{ backgroundColor: "rgb(4,21,45)" }}>
       {!loading? <div className="d-flex ">
          <img
            src={data?.imageurl[0]}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = img1;
            }}
            className=" img"
            alt="..."
          />
          <div className="details">
            <h1 className="title w-100 overflow-hidden">
              {data?.title} ({data?.released})
            </h1>
            <p style={{marginTop:"20px"}}>
              {data?.genre.map((item) => (
                <span className="genre">
                  {item}
                </span>
              ))}
            </p>
            <div className="d-flex ">
            <div className="progress">
            <CircleProgress rating={data?.imdbrating? data?.imdbrating :7.3}/>
            </div>
                <p className="text1" onClick={SelectTime}>Book Now</p>
            </div>
            <h3 className="text-light mt-4">Overview :</h3>
            <p className="text">{data?.synopsis}</p>
            <h3 className="lan">Language : <p className="text">{data?.language[0]}</p></h3>
          </div>
        </div>:
            <>
              <DetailsSkeleton/>
            </>
        }
      </div>
    </>
  );
}

export default Details;
