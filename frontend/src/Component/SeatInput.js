import React from "react";
import "../Css/SeatInput.css";

const SeatInput = ({ text, noOfSeat, changeNoOfSeats }) => {
  const change_seats = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);

    const updatedSeats = {
      ...noOfSeat,
      [e.target.name]: value,
    };

    changeNoOfSeats(updatedSeats);
    localStorage.setItem("seats", JSON.stringify(updatedSeats));
  };

  return (
    <div className="form-check-label">
      <span className="text">{text}</span>

      <input
        type="number"
        className="seats-input"
        placeholder="0"
        min="0"
        max="30"
        name={text}
        value={noOfSeat[text] || ""}
        onChange={change_seats}
      />
    </div>
  );
};

export default SeatInput;