import React, { useContext } from "react";
import MovieContext from "../../context/Moviecontext";
import "./TicketsCard.css";

function TicketsCrad({
  _id,
  movieName,
  thiatorName,
  seat,
  time,
  address,
  newdate,
  handleDelete,
  total
}) {
  const { getdata, deleteData } = useContext(MovieContext);
  let handledelete=(e)=>{
    let id = e.target.getAttribute("name");
    handleDelete(id)
  }
  // console.log(newdate.toString().slice(8,10))
  return (
    <div className="tiketBox col-4" key={_id}>
      <div className="d-flex justify-content-between ttitle">
        <p>{_id}</p>
        <div>
          <i
            name={_id}
            onClick={handledelete}
            className="fa-solid fa-trash"
          ></i>
        </div>
      </div>
      <h1 id="movieName">{movieName}</h1>
      <p className="ttitle">Thiator</p>
      <h1 id="thiatorName">{thiatorName}</h1>
      <p className="ttitle">address</p>
      <h4>{address}</h4>
      <div className="d-flex justify-content-between">
        <div>
      <p className="ttitle">Date & Time</p>
      <div className="d-flex ">
        <h1 className="dateTime">{newdate.toString().slice(0, 4)},</h1>
        <h1 className="dateTime mx-1">{newdate.toString().slice(8, 11)}</h1>
        <h1 className="dateTime">{newdate.toString().slice(4, 8)}</h1>
      </div>
      <h1 className="dateTime">{time}</h1>
        </div>
        <div>
          <p className="ttitle">Totale Amount</p>
          <p className="amount">{total} rs</p>
        </div>
      </div>
      <p className="ttitle"> Seats</p>
      <div className="d-flex">
        {seat.map((i) => {
          return <p className="mx-2 seats">{i}</p>;
        })}
      </div>
      {new Date().toString().slice(8,10) > newdate.toString().slice(8,10) ? (
        <p className="status text-dark text-center bg-danger">expire</p>
      ) : (
        <p className="status text-dark text-center bg-success">Active</p>
      )}
    </div>
  );
}

export default TicketsCrad;
