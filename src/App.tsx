import React from 'react';
import styles from './App.module.scss';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import {
   AppBar, 
   CssBaseline, 
   Link, 
   ThemeProvider, 
   Toolbar, 
   Typography, 
   createTheme 
  } from '@mui/material';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { teal } from '@mui/material/colors';

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

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96800f"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <div>
      <CssBaseline/>
      <AppBar>
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 5}} />
        <Typography variant='h6' color="inherit" noWrap>
          TMDB
        </Typography>
        <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Toolbar>
      </AppBar>
      <main>
        <Outlet/>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
