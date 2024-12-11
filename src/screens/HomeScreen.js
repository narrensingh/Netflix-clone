import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../requests';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <div className="rows">
        <Row
          title={'Netflix Originals'}
          fetchURL={requests.fetchNetflixOriginals}
          isLarge={true}
          istop={true}
        />
        <Row title={'Trending Now'} fetchURL={requests.fetchTrending} />
        <Row title={'Comedy Movies'} fetchURL={requests.fetchComedyMovies} />
        <Row title={'Horror Movies'} fetchURL={requests.fetchHorrorMovies} />
        <Row title={'Romance Movies'} fetchURL={requests.fetchRomanceMovies} />
        <Row title={'Documentaries'} fetchURL={requests.fetchDocumentaries} />
        <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
        <Row title={'Action Movies'} fetchURL={requests.fetchActionMovies} />
      </div>
    </div>
  );
};

export default HomeScreen;
