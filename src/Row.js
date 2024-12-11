import React, { useEffect, useState, useRef } from 'react';
import './Row.css';
import axios from './axios';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const Row = ({ title, fetchURL, isLarge = false, istop = false }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const rowRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchURL]);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      rowRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="row">
      <h1 className={`title ${istop && 'istop'}`}>{title}</h1>
      <div className="row__movies" ref={rowRef}>
        <div
          className={`${
            isLarge ? 'angular__backwardLarge' : 'angular__backwardNormal'
          } arrow-button`}
          onClick={() => handleScroll('left')}
        >
          <ArrowBackIosNewRoundedIcon />
        </div>
        {/* Movie Posters */}
        {movies.map((movie) => (
          <img
            className={`movies ${isLarge && 'poster_large'}`}
            key={movie.id}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
        <div
          className={`${
            isLarge ? 'angular__forwardLarge' : 'angular__forwardNormal'
          } arrow-button`}
          onClick={() => handleScroll('right')}
        >
          <ArrowForwardIosRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Row;
