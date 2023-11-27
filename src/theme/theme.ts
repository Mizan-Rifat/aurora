import { createTheme } from '@mui/material';
import { blue, green, lightBlue, orange, purple, red } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[400],
      dark: blue[600]
    },
    secondary: {
      main: purple[500],
      light: purple[400],
      dark: purple[600]
    },
    error: {
      main: red[500],
      light: red[400],
      dark: red[600]
    },
    warning: {
      main: orange[500],
      light: orange[400],
      dark: orange[600]
    },
    success: {
      main: green[500],
      light: green[400],
      dark: green[600]
    },
    info: {
      main: lightBlue[500],
      light: lightBlue[400],
      dark: lightBlue[600]
    }
  },
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.16
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.625rem',
      lineHeight: 1.15
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.12
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.15
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.15
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.3125rem',
      lineHeight: 1.2
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.3
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.3
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.45
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: 1.3,
      textTransform: 'none'
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.2
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.2,
      textTransform: 'uppercase'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const outlinedStyle =
            ownerState.variant === 'outlined'
              ? {
                  padding: '8px 16px'
                }
              : {};
          return {
            padding: '9px 16px'
          };
        }
      }
    }
  }
});
