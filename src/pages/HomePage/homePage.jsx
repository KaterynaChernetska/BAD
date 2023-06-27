import { NavLink } from 'react-router-dom';
import css from './homePage.module.css';

export const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>Test assignment for front-end developer</h1>
      <p className={css.appDescription}>
        This is a program that accepts any text and finds in each word of this
        text the very first symbol that is not repeated in the analyzed word.
        Then, from the received set of symbols, the program selects the first
        unique one (that is, the one that no longer occurs in the set) and
        returns it.
      </p>
      <NavLink
        to="/check"
        className={css.navLink}
        style={({ isActive }) => ({
          color: isActive ? '#000000' : '#FFFFFF',
        })}
      >
        CHECK YOUR TEXT
      </NavLink>
    </div>
  );
};
