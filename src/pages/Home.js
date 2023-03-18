import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/movies-api'
import { Loader } from '../components/Loader/Loader';
import { ErrorInfo } from '../components/SharedLayout/SharedLayout.styled';
import { MoviesList } from '../components/MoviesList/MoviesList'

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error'
}

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
      setStatus(Status.LOADING);
      getTrendingMovies()
        .then(data => {
          setMovies(data.results);
          setStatus(Status.RESOLVE);
        })
        .catch(err => {
          setMovies([]);
          setError(String(err));
          setStatus(Status.ERROR);
        });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <ErrorInfo>{error}</ErrorInfo>}
    </main>
  );
};

export default Home;
