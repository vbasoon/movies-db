import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import AppHeader from './components/AppHeader';
import { AuthContext, AuthInfo, Guest } from './components/AuthContext';
import { useState } from 'react';


const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96800f"
    }
  }
})

const fakeAuth = {
  user: {
    name: 'Supervisor'
  }
}

function App() {

  const[auth, setAuth] = useState<AuthInfo>({ user: Guest})
  return (
    <ThemeProvider theme={defaultTheme}>
    
      <CssBaseline/>
      <AuthContext.Provider value={auth}>
        <AppHeader onLogin={() => setAuth(fakeAuth)} onLogout={() => setAuth({ user: Guest})}/>
      <main>
        <Outlet/>
      </main>
      </AuthContext.Provider>
      
    
    </ThemeProvider>
  );
}

export default App;
