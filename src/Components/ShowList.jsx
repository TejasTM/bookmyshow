import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function ShowList() {
  let [movies, setMovies] = useState([]);
  let [movieName, setMovieName] = useState("");
  let [button, setButton] = useState("movies");

  let handleClick = () => [setButton(movieName)];
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${button}&apikey=2d907b72`)
      .then((response) => {
        setMovies(response.data.Search);
        // console.log(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [button]);

  return (
    <div className="showlist">
      <div className="input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies or events"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-light"
          type="button"
          id="button-addon2"
          onClick={handleClick} 
        >
          Search
        </button>
      </div>
      {movies.map((movie) => {
        return (
          <>
            <div
              className="col-md-3 d-inline-block mt-4"
              style={{ width: "18rem" }}
              key={movie.Title}
            >
              <div className="card h-100 text-center px-4 py-3 mx-3">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  height="220px"
                />
                <div className="card-body text-dark">
                  <h2>{movie.Title.substring(0, 15)}...</h2>
                  <NavLink to={"/bookmyshows"}>
                    <button className="btn btn-dark">BookNow</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </div>
  );
}
export default ShowList;
