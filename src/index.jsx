import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Theme from './styles/Theme';
import theme from './styles/themes/theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>

  </React.StrictMode>,
  document.getElementById('root'),
);
