import PropTypes from 'prop-types';
import { Container, PosterWrap, Poster, InfoWrap, InfoText } from './MovieInfo.styled';
import NoPoster from '../../images/noposter.png';

const baseImageURL = "https://image.tmdb.org/t/p/w500";

export const MovieInfo = ({ info: { title, poster_path, release_date, vote_average, overview, genres = [] } }) => {
  return (
    <Container>
      <PosterWrap>
        <Poster src={poster_path ? `${baseImageURL}${poster_path}` : NoPoster} alt={title} />
      </PosterWrap>
      <InfoWrap>
        <h1>{title}{release_date ? ` (${release_date.slice(0, 4)})` : ''}</h1>
        <InfoText>User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : '-'}</InfoText>
        <h3>Overview</h3>
        <InfoText>{overview || 'no info'}</InfoText>
        <h3>Genres</h3>
        <InfoText>{genres.length ? genres.map(el => el.name).join(', ') : 'no info'}</InfoText>
      </InfoWrap>
    </Container>
  );
};

MovieInfo.propTypes = {
  info: PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
    }).isRequired,
};

