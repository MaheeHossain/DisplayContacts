import React from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    h5: {
      fontWeight: 'bolder',
    },
    // text for buttons
    button: {
      fontWeight: 'bolder',
      textTransform: 'none'
    }
    
  },
  palette: {
    primary: {
      main: 'rgba(0, 0, 0)', // black
      variant: '#bb86f3', // purple
    },
    secondary: {
      main: '#03dac5', // green
      light: '#ffffff', // white
    },
  },
  shape: {
    borderRadius: 25,
  },
});

function App() {

  const AllRoutes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <AllRoutes/>
    </ThemeProvider>
  );
}

export default App;
