import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/movies-api'
import { Loader } from '../Loader/Loader';
import { ErrorInfo } from '../SharedLayout/SharedLayout.styled';
import { ReviewText } from './Reviews.styled';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error'
}

const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
      setStatus(Status.LOADING);
      getMovieReviews(movieId)
        .then(data => {
          setReviews(data.results);
          setStatus(Status.RESOLVE);
        })
        .catch(err => {
          setReviews([]);
          setError(String(err));
          setStatus(Status.ERROR);
        });
  }, [movieId]);

  return (
    <section>
      <h2 className="visually-hidden">Reviews</h2>
      {status === Status.RESOLVE &&
        (reviews.length ?
          <ul>
            {reviews.map(item =>
              <li key={item.id}>
                <h4>Author: {item.author || '?'}</h4>
                <ReviewText>{item.content}</ReviewText>
              </li>
            )}
          </ul>
          : <p>Sorry, we don't have any reviews for this movie.</p>
        )
      }
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <ErrorInfo>{error}</ErrorInfo>}
    </section>
  );
};

export default Reviews;
