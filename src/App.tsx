import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import AppHeader from './components/AppHeader';


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
      <AppHeader />
      <main>
        <Outlet/>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
