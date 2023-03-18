import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/movies-api'
import { Loader } from '../Loader/Loader';
import { ErrorInfo } from '../SharedLayout/SharedLayout.styled';
import { CastList, CastItem, CastImage } from "./Cast.styled";
import NoPhoto from '../../images/nophoto.png';

const baseImageURL = "https://image.tmdb.org/t/p/w500";

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error'
}

const Cast = () => {

  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
      setStatus(Status.LOADING);
      getMovieCast(movieId)
        .then(data => {
          setCast(data.cast);
          setStatus(Status.RESOLVE);
        })
        .catch(err => {
          setCast([]);
          setError(String(err));
          setStatus(Status.ERROR);
        });
  }, [movieId]);

  return (
    <section>
      <h2 className="visually-hidden">Cast</h2>
      {status === Status.RESOLVE &&
        (cast.length ?
          <CastList>
            {cast.map(item =>
              <CastItem key={item.credit_id}>
                <CastImage src={item.profile_path ? `${baseImageURL}${item.profile_path}` : NoPhoto} alt={item.original_name} />
                <h4>{item.name}</h4>
                <p>Character: {item.character}</p>
              </CastItem>
            )}
          </CastList>
          : <p>Sorry, we don't have cast information for this movie.</p>
        )
      }
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <ErrorInfo>{error}</ErrorInfo>}
    </section>
  );
};

export default Cast;
