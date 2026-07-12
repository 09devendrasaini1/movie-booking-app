import React, { useContext } from 'react'
import { movies } from '../data'
import RadioComponent from './RadioComponent'
import BsContext from '../Context/BsContext'
import '../Css/SelectMovies.css'

const SelectMovies = () => {

  const { movie, changeMovie } = useContext(BsContext);

  const handleChangeMovie = (val) => {
    changeMovie(val);
    window.localStorage.setItem("movie", val);
  };

  return (
    <div>
      <h1 className='SM-heading'>Select a Movie</h1>

      <div className='SM-main-container'>
        {movies.map((el, index) => (
          <RadioComponent
            text={el}
            key={index}
            data={movie}
            changeSelection={handleChangeMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectMovies;
