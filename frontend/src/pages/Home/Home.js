import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useFetchMovies } from '../../components/Hooks/useFetchMovies';
import { Movie } from '../../components/Movie';
import logo from './logo.svg';

function Home() {
  const [movieName, setMovieName] = useState('');
  const handleChange = event => {
    setMovieName(event.target.value);
  };
  const movies = useFetchMovies();

  return (
    <div className="App">
      {console.log('movies', movies)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>This is my movie Name: {movieName}</p>
        <form>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={handleChange}
          />
        </form>
        <p>This are the movies : </p>
        <div className="moviesGrid">
          {movies !== null && movies.map(movie => <Movie movie={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
