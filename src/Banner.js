import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './requests';
import axios from './axios';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncation = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(movie);
  }, [movie]);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
        )`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">▶ Play</button>
          <button className="banner__button my__listbtn">ⓘ My List</button>
        </div>
        <h1 className="banner__description">
          {truncation(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadebottom" />
    </div>
  );
};

export default Banner;
