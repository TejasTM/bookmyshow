import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className="mt-2">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661348949701_web.jpg"
              className="d-block w-95 mx-5"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661410314982_webbanner.jpg"
              className="d-block w-95 mx-5"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661404142053_web.jpg"
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

      <h2 className="mt-4 mb-5 text-light">Recommended Movies</h2>

      <div className="d-flex">
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjElICA1OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00304943-zutmvdzfde-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Liger</h2>
            <h6>Action/Drama/Love</h6>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00325158-dlyaqxxbjm-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Galipata 2</h2>
            <h6>Love/Drama/Comedy</h6>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICAzOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128225-elnlunrgbu-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Vikrant Rona</h2>
            <h6>Action/Drama/Thriller</h6>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjklICA3NTUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00335980-ffsfcywegh-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Theerpu</h2>
            <h6>Action/Drama/Suspense</h6>
            <NavLink to={"/bookmyshows"}>
              <button className="btn btn-primary">Book ticket</button>
            </NavLink>
          </div>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAzMzIgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00334841-trhmusafgf-portrait.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">Mike</h2>
            <h6>Action/Drama/Thriller</h6>
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

export default Home;
