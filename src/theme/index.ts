import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#6B0F1A',
      dark: '#4A0A12',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#C9A24D',
      dark: '#B08C3C',
      contrastText: '#2A1A00',
    },

    background: {
      default: '#F4F1EE',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#1F1F1F',
      secondary: '#6F6F6F',
    },

    error: {
      main: '#C62828',
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),

    h3: {
      fontWeight: 800,
      letterSpacing: 0.5,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E6E1DC',
        },
      },
    },
  },
})

export default theme
