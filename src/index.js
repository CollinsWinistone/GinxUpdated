
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, useTheme } from 'react-jss';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
// import App from './components/collinsTests/App';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    palette: {
      primary: {
        main: "#565d70",
      },
      secondary: {
        main: "#fdfcfa",
      },
    },
  });
root.render(
    <ThemeProvider theme={theme}>
        <App/>

    </ThemeProvider>
  
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
