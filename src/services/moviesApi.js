import axios from 'axios';
const API_KEY = '5cdd7594fc899d7c91f091a01f7ddf12';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () =>
  axios
    .get(`trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);

export const fetchSearch = query =>
  axios
    .get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(response => response);

export const fetchMovieDetails = id =>
  axios
    .get(`movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response);

export const fetchCastInformation = id =>
  axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response);

export const fetchReviews = id =>
  axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response);
