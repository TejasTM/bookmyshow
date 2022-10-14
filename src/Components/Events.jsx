import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Events() {
  return (
    <div className="event">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661510086112_qwedf.jpg"
              className="d-block w-95 mx-5"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661515593931_wetyrh.png"
              className="d-block w-95 mx-5"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659612352994_ministry_web.jpg"
              className="d-block w-95 mx-5"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="mt-4 mb-5 text-light">Recommended Events</h2>

      <div className="d-flex">
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325424-dlhmhttmwj-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>Artist : Sachin Kumar</h5>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA3IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337201-lclaxvsjey-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>Artist : Suhani Shah</h5>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337694-gxmxtenxxr-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>Artist : Aravind SA</h5>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-gbhkxlqwrk-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>Artist : Harish Gujral</h5>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00314475-mzcrtkbejr-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>Artist : Joteen Patro</h5>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
