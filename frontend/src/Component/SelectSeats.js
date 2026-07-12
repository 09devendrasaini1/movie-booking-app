import React, { useContext } from 'react'
import { selectSeat } from '../data'
import SeatInput from './SeatInput'
import '../Css/SelectSeats.css'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {

  const { noOfSeat, changeNoOfSeats } = useContext(BsContext);

  return (
    <div className='SS-wrapper'>
      <h1 className='SS-heading'>Select Seats:</h1>

      <div className='SS-main-container'>
        {selectSeat.map((el, index) => (
          <SeatInput
            key={index}
            text={el}
            noOfSeat={noOfSeat}
            changeNoOfSeats={changeNoOfSeats}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectSeats;
