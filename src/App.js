import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#333333',
        dark: '#000'
     },
     secondary: {
       main: '#333',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

function App() {
  return (
    <div className="App">
       <MuiThemeProvider theme = { theme }>
          <Home/>
       </MuiThemeProvider>
    </div>
  );
}

export default App;
