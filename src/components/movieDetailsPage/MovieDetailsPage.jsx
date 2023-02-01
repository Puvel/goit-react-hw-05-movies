import { useState, useEffect, Suspense } from 'react';
import {
  NavLink,
  useNavigate,
  useParams,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import css from './movieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => setFilm(result.data));
  }, [movieId, location]);

  const handleClick = () => navigate(-1);

  return (
    film && (
      <section>
        <button className={css.toBackBtn} type="button" onClick={handleClick}>
          &#8592; Go back
        </button>
        <div className={css.filmWrap}>
          <div className={css.filmImageWrap}>
            {film.poster_path ? (
              <img
                className={css.filmImage}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                width="200"
              />
            ) : (
              <img
                className={css.filmImage}
                src="https://ih1.redbubble.net/image.188518724.7199/flat,128x128,075,t-pad,128x128,f8f8f8.u2.jpg"
                alt={film.title}
                width="200"
              />
            )}
          </div>
          <ul className={css.filmDetailsList}>
            <li className={css.filmDetailsItem}>
              <h2>
                {film.title}
                <span>({film.release_date.substr(0, 4)})</span>
              </h2>
            </li>
            <li className={css.filmDetailsItem}>
              User score : {Math.floor((film.vote_average * 100) / 10)} %
            </li>
            <li className={css.filmDetailsItem}>
              <h3>Overview</h3>
              <p>{film.overview}</p>
            </li>
            <li className={css.filmDetailsItem}>
              <h3>Genres</h3>
              <ul className={css.genresList}>
                {film.genres.map(genre => (
                  <li className={css.genresItem} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className={css.additionalWrap}>
          <h2>Additional information</h2>
          <ul className={css.additionalLinks}>
            <li>
              <NavLink
                to={'cast'}
                state={{ from: location }}
                className={({ isActive }) =>
                  isActive ? css.additionalLinkActive : css.additionalLink
                }
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'reviews'}
                state={{ from: location }}
                className={({ isActive }) =>
                  isActive ? css.additionalLinkActive : css.additionalLink
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    )
  );
};
