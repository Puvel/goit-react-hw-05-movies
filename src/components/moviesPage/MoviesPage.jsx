import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearch } from 'services/moviesApi';
import { MoviesList } from 'components/moviesList/MoviesList';
import css from './moviesPage.module.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (params && params.query) {
      setQuery(params.query);
      fetchSearch(params.query).then(result => setMovies(result.data.results));
    } else {
      setQuery('');
      setMovies([]);
    }
  }, [params]);

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search..."
          autoComplete="off"
          value={query}
          onChange={handleChange}
          className={css.searchInput}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      {movies.length ? (
        <MoviesList movies={movies} query={query} />
      ) : (
        <h2 className={css.searchDefault}>Which movie do you want to find?</h2>
      )}
    </div>
  );
};
