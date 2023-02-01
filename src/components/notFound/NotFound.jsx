import css from './notFound.module.css';
export const NotFound = () => (
  <section className={css.notFoundWrap}>
    <p className={css.notFoundText}>Sorry, page not found</p>
    <p className={css.notFoundIcon} role="img" aria-label="emoji">
      &#128584;
    </p>
  </section>
);
