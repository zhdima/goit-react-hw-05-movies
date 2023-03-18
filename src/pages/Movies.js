import { useState, useEffect } from 'react';
import { getSearchMovies } from '../services/movies-api'
import { Loader } from '../components/Loader/Loader';
import { ErrorInfo } from '../components/SharedLayout/SharedLayout.styled';
import { MoviesList } from '../components/MoviesList/MoviesList'
import { useSearchParams } from 'react-router-dom';
import { HiSearch } from "react-icons/hi";

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error'
}

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
      setStatus(Status.LOADING);
      getSearchMovies(query)
        .then(data => {
          setMovies(data.results);
          setStatus(Status.RESOLVE);
        })
        .catch(err => {
          setMovies([]);
          setError(String(err));
          setStatus(Status.ERROR);
        });
  }, [query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.search.value.trim();
    setSearchParams(query ? { query } : {});
  };

  return (
    <main>
      <h1 className="visually-hidden">Movies</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <button type="submit"><HiSearch size="16" /></button>
      </form>
      <MoviesList movies={movies} />
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <ErrorInfo>{error}</ErrorInfo>}
    </main>
  );
};

export default Movies;
