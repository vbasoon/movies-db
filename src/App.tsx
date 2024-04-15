import React from 'react';
import styles from './App.module.scss';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { AppBar, CssBaseline, Link, Toolbar } from '@mui/material';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

function HeaderLink({
  children, 
  to,
}: {
  to: string, 
  children: React.ReactNode;
}) {
  return (
    <Link 
      component={RouterLink} 
      to={to}
      variant="button"
      color="inherit"
      sx={{ my: 1, mx: 1.5}}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    
    <div>
      <CssBaseline/>
      <AppBar>
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 5}} />
        <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
