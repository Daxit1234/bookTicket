import React, { useContext } from "react";
import MovieContext from "../../context/Moviecontext";
import { useNavigate } from 'react-router-dom';
import record from "./movietime.json";
import MovieDates from "../../component/dates/MovieDates";

function Location() {
  const {details,setDetails} = useContext(MovieContext);
  let navigate = useNavigate();
  let setBookingTime = (e) => {
    let stime=e.target.getAttribute("time");
    let sthiator=e.target.getAttribute("thiator");
    let saddress=e.target.getAttribute("address");
    setDetails({...details,thiatorName:sthiator,address:saddress,time:stime})
    navigate("/seat");
  };
  return (
    <>
      <div className="container">
        <MovieDates/>
        <div className="row d-flex justify-content-between">
          {record.results.map((item) => {
            return (
              <div
                className="card col-4 mx-1"
                style={{ height: "300px", width: "350px" }}
                key={item.cinema}
              >
                <h5 className="card-header bg-dark text-light">
                  {item.cinema}
                </h5>
                <div className="card-body">
                  <h5 className="card-title">{item.address}</h5>
                  <div className="row">
                    {item.time.map((time) => {
                      return (
                        <div
                          className="col-3 my-1"
                          key={item.cinema + time[0] + time[1]}
                        >
                          <button
                            className="btn btn-outline-success h-50"
                            time={`${time[0]} ${time[1]}`}
                            thiator={item.cinema}
                            address={item.address}
                            onClick={setBookingTime}
                          >
                            {time[0]}
                            <br />
                            {time[1]}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Location;
