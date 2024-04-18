import { AppBar, Box, Button, Link, Toolbar, Typography, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { useContext } from 'react';
import { AuthContext, Guest } from './AuthContext';

function HeaderLink({ children, to, }: { to: string, children: React.ReactNode; }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5}}>
      {children}
    </Link>
  );
}

interface AppHeaderProps {
  onLogin(): void,
  onLogout(): void,
}

const AppHeader = ({onLogin, onLogout}: AppHeaderProps) => {
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
        <AuthSection 
          onLogin={onLogin} 
          onLogout={onLogout}
        />
      </Toolbar>
    </AppBar>
  )
}

interface AuthSectionProps {
  onLogin(): void,
  onLogout(): void,
}

function AuthSection({onLogin, onLogout} : AuthSectionProps) {
  const auth = useContext(AuthContext);
  const loggedIn = auth.user !== Guest

  

  // const loggedIn = true;
  // const userName = 'Vlad';

  if (loggedIn) {
    return (
      <>
        <Typography>Hello, {auth.user.name}!</Typography>
        <Button color="inherit" variant="outlined" onClick={onLogout} sx={{ ml: 1.5}}>Log out</Button>
      </>
    )
  } 
    
  return <Button color="inherit" variant="outlined" onClick={onLogin}>Log in</Button>
}

export default AppHeader