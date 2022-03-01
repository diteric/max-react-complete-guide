import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  useEffect(fetchMoviesHandler, []);

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
