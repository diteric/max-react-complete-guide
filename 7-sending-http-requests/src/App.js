import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async and await are used together to unwrap the Promise object,
  // It is another way of using the Fetch API
  const fetchMoviesHandlerAsync = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetch('https://swapi.dev/api/filmsxx');

    if (!response.ok) {
      setError('response Error');
    } else {
      const data = await response.json();
      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => fetchMoviesHandlerAsync(), [fetchMoviesHandlerAsync]);

  let content = <p></p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandlerAsync}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
