import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};