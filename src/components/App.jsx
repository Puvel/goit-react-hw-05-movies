import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';

const HomePage = lazy(() =>
  import('components/homePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('components/moviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('components/movieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

const Cast = lazy(() =>
  import('components/cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('components/reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

const NotFound = lazy(() =>
  import('components/notFound/NotFound').then(module => ({
    default: module.NotFound,
  }))
);

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
