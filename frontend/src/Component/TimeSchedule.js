import React, { useContext } from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'
import BsContext from '../Context/BsContext'

const TimeSchedule = () => {

  const { time, changeTime } = useContext(BsContext);

  const handleChangeItem = (val) => {
    changeTime(val);
    window.localStorage.setItem("slot", val);
  };

  return (
    <div className='Slot-container'>
      <h1 className='TS-heading'>Select a Schedule</h1>

      <div className='TS-main-container'>
        {slots.map((el, index) => (
          <RadioComponent
            text={el}
            key={index}
            changeSelection={handleChangeItem}
            data={time}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSchedule;
