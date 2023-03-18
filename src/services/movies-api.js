import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API  = 'df88ba4f44a5ed712dd0a71f1b3d877c';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data;
}

export async function getSearchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}`   
  );
  return response.data;
}

export async function getMovieDetails(movieId) {     
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY_API}`
  );
  return response.data;
}

export async function getMovieCast(movieId) {     
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY_API}`
  );
  return response.data;
}

export async function getMovieReviews(movieId) {     
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY_API}`
  );
  return response.data;
}
