import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async and await are used together to unwrap the Promise object,
  // It is another way of using the Fetch API
  const fetchMoviesHandlerAsync = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      'https://react-backend-b1fa8-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
    );

    if (!response.ok) {
      setError('response Error');
    } else {
      const data = await response.json();
      const loadeMovides = [];
      for (const key in data) {
        loadeMovides.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadeMovides);
    }
    setIsLoading(false);
  }, []);

  // useEffect(() => fetchMoviesHandlerAsync(), [fetchMoviesHandlerAsync]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      'https://react-backend-b1fa8-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();
    console.log(data);
  };

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandlerAsync}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
