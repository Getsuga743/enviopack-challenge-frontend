import PropTypes from 'prop-types';
import React from 'react';

import Header from '../components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default Layout;
