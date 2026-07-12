import React, { useContext } from "react";
import SelectMovies from "../Component/SelectMovies";
import LastBookingDetails from "../Component/LastBookingDetails";
import TimeSchedule from "../Component/TimeSchedule";
import SelectSeats from "../Component/SelectSeats";
import "../Css/Home.css";
import BsContext from "../Context/BsContext";

const Home = () => {
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = useContext(BsContext);

  const handleBookNow = async () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please Select a Movie");
      return;
    }

    if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please Select Time");
      return;
    }

    const seatsSelected = Object.values(noOfSeat).some(
      (seat) => Number(seat) > 0
    );

    if (!seatsSelected) {
      setErrorPopup(true);
      setErrorMessage("Please Select Seats");
      return;
    }

    await handlePostBooking();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="select-movie-component">
          <SelectMovies />
        </div>

        <div className="last-booking-details-container">
          <LastBookingDetails />
        </div>
      </div>

      <div className="time-seat-container">
        <TimeSchedule />
        <SelectSeats />

        <button className="BN-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;