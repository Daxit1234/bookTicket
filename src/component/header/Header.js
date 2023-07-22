import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css"

const Header = () => {
  let location=useLocation();
  // const {setSearch,search}=useContext(MovieContext)
  // const [query,setQuery]=useState("")
  // let setValue=(e)=>{
  //    setQuery(e.target.value)
  // }
  // let newsearch=()=>{
  //   setSearch(search+1)
  // }
  return (
    <div style={{marginBottom:"50px"}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MOVIE HUB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${(location.pathname==="/"  || location.pathname==="/login"  || location.pathname==="/singin")?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link ${(location.pathname==="/payment" || location.pathname==="/movie" || location.pathname==="/movietime" || location.pathname==="/movieseat")?"active":""}`} aria-current="page" to="/movies">Movie</Link>
        </li> */}
        <li className="nav-item">
          <Link className={`nav-link ${(location.pathname==="/about")?"active":""}`} to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(location.pathname==="/contact")?"active":""}`} to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" >Search</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
};

export default Header;
