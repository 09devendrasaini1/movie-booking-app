import { useEffect, useState, useCallback } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [movie, changeMovie] = useState("");
  const [time, changeTime] = useState("");

  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    B1: "",
    B2: "",
    B3: "",
  });

  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    try {
      const response = await fetch("https://movie-booking-backend-gaim.onrender.com/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movie,
          slot: time,
          seats: noOfSeat,
        }),
      });

      const data = await response.json();

      setErrorPopup(true);
      setErrorMessage(data.message);

      if (response.status === 200) {
        changeMovie("");
        changeTime("");

        changeNoOfSeats({
          A1: "",
          A2: "",
          A3: "",
          B1: "",
          B2: "",
          B3: "",
        });

        setLastBookingDetails(data.data);

        localStorage.removeItem("movie");
        localStorage.removeItem("slot");
        localStorage.removeItem("seats");
      }
    } catch (error) {
      setErrorPopup(true);
      setErrorMessage("Server not responding");
    }
  };

  const handleGetBooking = useCallback(async () => {
    try {
      const response = await fetch("https://movie-booking-backend-gaim.onrender.com/api/booking", {
        method: "GET",
      });

      const data = await response.json();
      setLastBookingDetails(data.data);
    } catch (error) {
      setErrorPopup(true);
      setErrorMessage("Unable to fetch booking");
    }
  }, []);

  useEffect(() => {
    const movie = localStorage.getItem("movie");
    const slot = localStorage.getItem("slot");
    const seats = JSON.parse(localStorage.getItem("seats") || "null");

    if (movie) changeMovie(movie);
    if (slot) changeTime(slot);
    if (seats) changeNoOfSeats(seats);
  }, []);

  return (
    <BsContext.Provider
      value={{
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        handleGetBooking,
        handlePostBooking,
        errorMessage,
        errorPopup,
        setErrorMessage,
        setErrorPopup,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;