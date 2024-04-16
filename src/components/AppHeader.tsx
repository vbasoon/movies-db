import { AppBar, Box, Button, Link, Toolbar, Typography, } from '@mui/material';
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
    <AppBar position='static'>
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 5}} />
        <Typography variant='h6' color="inherit" noWrap>
          TMDB
        </Typography>
        <Box sx={{flexGrow: 1}}>
          <nav>
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/about">About</HeaderLink>
              <HeaderLink to="/movies">Movies</HeaderLink>
          </nav>
        </Box>
        <AuthSection/>
      </Toolbar>
    </AppBar>
  )
}

function AuthSection() {
  const loggedIn = true;
  const userName = 'Vlad';

  if (loggedIn) {
    return (
      <>
        <Typography>Hello, {userName}!</Typography>
        <Button color="inherit" variant="outlined" sx={{ ml: 1.5}}>Log in</Button>
      </>
    )
  } 
    
  return <Button color="inherit" variant="outlined">Log in</Button>
}

export default AppHeader