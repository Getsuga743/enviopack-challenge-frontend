import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import GlobalStyles from './globals';

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default Theme;
