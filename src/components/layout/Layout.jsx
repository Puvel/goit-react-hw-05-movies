import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './layout.module.css';

export const Layout = () => (
  <>
    <header className={css.header}>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.navigationLinkActive : css.navigationLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.navigationLinkActive : css.navigationLink
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </>
);
