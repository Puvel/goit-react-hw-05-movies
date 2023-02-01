import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';
import css from './homePage.module.css';
import { MoviesList } from 'components/moviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <section className={css.home}>
      <h2 className={css.title}>Trending today</h2>
      <MoviesList movies={movies} />
    </section>
  );
};
