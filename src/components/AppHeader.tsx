import { AppBar, Link, Toolbar, Typography, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

function HeaderLink({ children, to, }: { to: string, children: React.ReactNode; }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5}}>
      {children}
    </Link>
  );
}


const AppHeader = () => {
  return (
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
  )
}

export default AppHeader