import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CardContextProvider } from './contexts/CardContext';
ReactDOM.render(
  <React.StrictMode>
    <CardContextProvider>
        <App />
    </CardContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


