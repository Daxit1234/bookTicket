import React from "react";
// import useFetch from "./hook/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Location from "./pages/location/Location";
import Seat from "./pages/selectSeat/Seat";
import Payment from "./pages/payment/Payment";
import Header from "./component/header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moviestate from "./context/MovieState";

function App() {
  // const { data } = useFetch("advancedsearch?page=2");
  // console.log(data);
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
          <Route path="/explore/:mediaType" element={<Payment/>} />
          <Route exact path='/about' element={<About/>} />
           <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      </Moviestate>
    </div>
  );
}

export default App;
