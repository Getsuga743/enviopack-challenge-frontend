import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './styles/Theme';
import App from './App';
import theme from './styles/themes/theme';
import ProductsProvider from './context/ProductsContext';
import UserProvider from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <Theme theme={theme}>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
