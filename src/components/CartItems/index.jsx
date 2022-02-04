import PropTypes from 'prop-types';
import React from 'react';
import Box from '../ui/Box';

function CartItems({ children }) {
  return (
    <Box height="auto" width="lg" m="auto auto 2rem auto" p="2rem" direction="column">
      {children}
    </Box>
  );
}

CartItems.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default CartItems;
