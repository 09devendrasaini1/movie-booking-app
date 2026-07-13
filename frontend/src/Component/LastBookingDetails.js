import React, { useContext, useEffect } from "react";
import { selectSeat } from "../data";
import "../Css/LastBookingDetails.css";
import BsContext from "../Context/BsContext";

const LastBookingDetails = () => {
  const { lastBookingDetails, handleGetBooking } = useContext(BsContext);

  useEffect(() => {
    handleGetBooking();
  }, [handleGetBooking]);

  if (!lastBookingDetails) {
    return (
      <div className="last-booking-details-container-main">
        <h2 className="last-booking-details-header">
          Last Booking Details
        </h2>
        <p>No booking found.</p>
      </div>
    );
  }

  return (
    <div className="last-booking-details-container-main">
      <h2 className="last-booking-details-header">
        Last Booking Details
      </h2>

      <div className="seats-container">
        <p className="seats-header">Seats:</p>

        <ul className="seats">
          {selectSeat.map((seat) => {
            const qty = lastBookingDetails.seats?.[seat];

            return qty > 0 ? (
              <li key={seat} className="seat-value">
                {seat}: {qty}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      <p className="slot">
        <strong>Slot:</strong> {lastBookingDetails.slot}
      </p>

      <p className="movie">
        <strong>Movie:</strong> {lastBookingDetails.movie}
      </p>
    </div>
  );
};

export default LastBookingDetails;