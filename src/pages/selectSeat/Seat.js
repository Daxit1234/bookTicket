import React,{useContext, useState} from "react";
import "./Seat.css";
import MovieContext from "../../context/Moviecontext";

function Seat() {
  const {booking,details,setDetails} = useContext(MovieContext);
  const [status,setStatus]=useState(false);
  // const [color,setColor]=useState("")
  let seats = [
    {
      row: "A",
      seatNo: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      ],
    },
    {
      row: "B",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "C",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "D",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "E",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "F",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "G",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "H",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "I",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
    {
      row: "J",
      seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
  ];

  let selected=(e)=>{
    if(status){
      e.target.style.backgroundColor="";
      setStatus(false)
    }else{
      e.target.style.backgroundColor="#00b8f5";
      let temp=e.target.getAttribute("name")
      setDetails({...details,seat:[...details.seat,temp]})
      setStatus(true)
    }
    console.log(details)
  }
  let handleBooking=()=>{
    booking()
    // setColor("rgb(4,21,45)")
   const spans= document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.backgroundColor='rgb(4,21,45)'
    }
  }
  return (
    <div className="text-light con">
      {seats.map((item) => {
        return (
          <div className="row">
            <h3 className="col-1">{item.row}</h3>
            {item.seatNo.map((e) => {
              return (
                <>
                  {/* <input
                    type="checkbox"
                    className="form-check-input col chk"
                    name={item.row + e}
                    id=""
                  /> */}
                    <span className="chk" onClick={selected} name={item.row + e}>{item.row }<br />{ e}</span>
                </>
              );
            })}
          </div>
        );
      })}
      <div className="btn1">
      <button onClick={handleBooking}>Book Ticket</button>
      </div>
    </div>
  );
}

export default Seat;
