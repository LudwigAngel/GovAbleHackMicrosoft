import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a4428', // Verde oscuro
    },
    secondary: {
      main: '#58f777', // Verde claro
    },
    background: {
      default: '#f5f5f5', // Fondo claro
    },
    text: {
      primary: '#333', // Texto gris oscuro
      secondary: '#777', // Texto gris claro
    },
    neutro: {
        main: '#000', // negro
      },
  },
  typography: {
    fontFamily: 'Telex, sans-serif', // Fuente moderna
  },
});

export default theme;
