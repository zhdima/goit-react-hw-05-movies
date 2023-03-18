import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from '../services/movies-api'
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { Loader } from '../components/Loader/Loader';
import { ErrorInfo, BackLink } from '../components/SharedLayout/SharedLayout.styled';
import { HiArrowLeft } from "react-icons/hi";

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error'
}

const MovieDetails = () => {

  const [details, setDetails] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
      setStatus(Status.LOADING);
      getMovieDetails(movieId)
        .then(data => {
          setDetails(data);
          setStatus(Status.RESOLVE);
        })
        .catch(err => {
          setDetails({});
          setError(String(err));
          setStatus(Status.ERROR);
        });
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkRef.current}><HiArrowLeft size="12" />Go back</BackLink>
      <br/>
      {details && <MovieInfo info={details} />}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <ErrorInfo>{error}</ErrorInfo>}

      <hr/>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
