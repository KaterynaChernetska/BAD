import { NavLink, Outlet } from 'react-router-dom';
import css from './navigation.module.css';
import image from '../../assets/PortaOne.png'

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div>
            <img src={image} alt='PortaOne'/>
        </div>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#000000' : '#FFFFFF',
            })}
          >
            HOME
          </NavLink>
          <NavLink
            to="/check"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#000000' : '#FFFFFF',
            })}
          >
            CHECK YOUR TEXT
          </NavLink>
        </nav>
      </header>

      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};
