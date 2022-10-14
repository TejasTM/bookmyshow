import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0 align-items-center">
              <li className="nav-item mx-5">
                <NavLink to={"/bookmyshow"}>
                  <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" />
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/bookmyshow"}>
                  <span className="nav-link active text-light">Home</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/events"}>
                  <span className="nav-link active text-light ">Events</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/showlist"}>
                  <span className="nav-link active text-light ">Show List</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/bookmyshows"}>
                  <span className="nav-link active text-light ">
                    BookMyShow
                  </span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/contact"}>
                  <span className="nav-link active text-light ">
                    Contact Us
                  </span>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
