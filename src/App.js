import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Location from "./pages/location/Location";
import Seat from "./pages/selectSeat/Seat";
import Header from "./component/header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moviestate from "./context/MovieState";
import Login from "./pages/loginSingup/Login";
import Singin from "./pages/loginSingup/Singin";
import BookedTikets from "./pages/BookedTikets/BookedTikets";
import AllTickets from "./pages/Admin/AllTickets";
import AllUsers from "./pages/Admin/AllUsers";

function App() {
  return (
    <div >
      <Moviestate>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="datails/:imdbid" element={<Details/>} />
          <Route path="locationTime" element={<Location/>} />
          <Route path="seat" element={<Seat/>} />
          <Route exact path='about' element={<About/>} />
           <Route exact path='contact' element={<Contact/>} />
           <Route exact path='login' element={<Login/>} />
           <Route exact path='singin' element={<Singin/>} />
           <Route exact path='bookedTikets' element={<BookedTikets/>} />
           <Route exact path='allTickets' element={<AllTickets/>} />
           <Route exact path='Users' element={<AllUsers/>} />
        </Routes>
      </Router>
      </Moviestate>
    </div>
  );
}

export default App;
