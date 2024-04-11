import React from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="/cinema-ico.png" className={styles.logo} alt="logo" />
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/">Home</Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/about">About</Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/movies">Movies</Link>
          </li>
        </ul>
        </nav>
        
      </header>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
