import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/moviesApi';
import css from './reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(result => setReviews(result.data.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3 className={css.reviewsDefault}>
      We don&acute;t have any reviews for this movie
    </h3>
  ) : (
    <ul className={css.reviewsList}>
      {reviews.map(review => (
        <li className={css.reviewsItem} key={review.id}>
          <h3>
            Author: <span>{review.author}</span>
          </h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
