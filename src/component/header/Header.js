import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let location = useLocation();
  let obj;
  if (localStorage.getItem("userDetails")) {
    obj = JSON.parse(localStorage.getItem("userDetails"));
  }
  let logout = () => {
    localStorage.removeItem("userDetails");
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(1,25,40)" }}
      >
        <div className="container-fluid">
          <img
            src="https://www-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=31536000&url=https%3A%2F%2Fmoviesmod.one%2Fwp-content%2Fuploads%2F2022%2F12%2Fmoviesmodnew-Custom.png"
            alt="Logo"
          />
          <div className="collapse navbar-collapse">
            {obj && obj?.email === "admin@gmail.com" ? (
              <ul
                className="navbar-nav me-auto mb-2 "
                style={{ marginLeft: "80px" }}
              >
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/Users"
                        ? "active"
                        : ""
                    }`}
                    to="/Users"
                  >
                    All Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/allTickets" ? "active" : ""
                    }`}
                    to="/allTickets"
                  >
                    All Tickets
                  </Link>
                </li>
              </ul>
            ):(
              <ul
                className="navbar-nav me-auto mb-2 "
                style={{ marginLeft: "80px" }}
              >
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ||
                      location.key === "hwugaqm2" ||
                      location.pathname === "/locationTime" ||
                      location.pathname === "/seat"
                        ? "active"
                        : ""
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                {obj && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/bookedTikets" ? "active" : ""
                      }`}
                      to="/bookedTikets"
                    >
                      BookedTikets
                    </Link>
                  </li>
                )}
              </ul>
            )}
            {!obj ? (
              <div className="d-flex mx-5">
                <Link
                  className={`btn btn-outline-success mx-2 ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  to="login"
                >
                  Login
                </Link>
                <Link
                  className={`btn btn-outline-primary mx-2 ${
                    location.pathname === "/singin" ? "active" : ""
                  }`}
                  to="singin"
                >
                  SingIn
                </Link>
              </div>
            ) : (
              <div className="d-flex text-light">
                <h3 className="username">{obj.name}</h3>
                <Link
                  onClick={logout}
                  className="btn btn-outline-success mx-2"
                  to="login"
                >
                  Log Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
