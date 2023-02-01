import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies, query = '' }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.length > 0 &&
        movies.map(film => (
          <li key={film.id}>
            <Link
              className={css.movieLink}
              to={`/movies/${film.id}`}
              state={{ from: location, search: query }}
            >
              {film.poster_path ? (
                <img
                  className={css.movieImage}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                  width="200"
                />
              ) : (
                <img
                  className={css.movieImage}
                  src="https://ih1.redbubble.net/image.188518724.7199/flat,128x128,075,t-pad,128x128,f8f8f8.u2.jpg"
                  alt={film.title}
                  width="200"
                />
              )}
              <p className={css.movieTitle}>{film.title}</p>
            </Link>
            <p>{film.release_date.substr(0, 4)}</p>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  filter: PropTypes.string,
  filterInput: PropTypes.func,
};
