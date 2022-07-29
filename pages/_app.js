import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const theme = createTheme({
  palette: {
    background: {
      paper: '#c5cae9',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#683fb5',
    },
    primary: {
      main: '#3f51b5',
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp
