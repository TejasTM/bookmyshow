import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function BookMyShow() {
  let ticketBooking = () => {
    alert("Ticket Booked Succesfully");
  };

  const navigate = useNavigate();

  return (
    <div className="tickets">
      <h1>Book Show Tickets here</h1>
      <hr />
      <form action="" onSubmit={ticketBooking}>
        <label>Enter your Name : </label>
        <input required type="text" />
        <br />
        <label>Enter your Ph No : </label>
        <input required type="tel" />
        <br />
        <label>Enter Show Name : </label>
        <input required type="text" />
        <br />
        <label>Enter No.of ticket : </label>
        <input required type="number" />
        <br />
        <label>Enter Date : </label>
        <input required type="date" />
        <br />
        <button type="submit" className="btn btn-success" id="book">
          Book Ticket
        </button>
      </form>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default BookMyShow;
