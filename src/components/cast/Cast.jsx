import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInformation } from 'services/moviesApi';
import css from './cast.module.css';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCastInformation(movieId).then(result => setActors(result.data.cast));
  }, [movieId]);

  return actors.length > 0 ? (
    <ul className={css.actorsList}>
      {actors.map(actor => (
        <li key={actor.id}>
          <ul className={css.actorInfoList}>
            <li>
              {actor.profile_path ? (
                <img
                  className={css.actorImage}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="200"
                />
              ) : (
                <img
                  className={css.actorImage}
                  src="https://ih1.redbubble.net/image.188518724.7199/flat,128x128,075,t-pad,128x128,f8f8f8.u2.jpg"
                  alt={actor.name}
                  width="200"
                />
              )}
            </li>
            <li>
              <h4>{actor.name}</h4>
            </li>
            <li>
              <h3>Character</h3>
              <p>{actor.character}</p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  ) : (
    <h3>Actors not found</h3>
  );
};
