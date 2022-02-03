import React from 'react';
import Box from '../../components/ui/Box';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';

function Cart() {
  return (
    <PageContainer>
      <Title fontSize="xl">Carrito</Title>
      <Box height="10rem" width="lg">
        hola
      </Box>
      <Box height="5rem" width="lg">
        <span>Total</span>
        <span>$ 10000</span>
      </Box>
    </PageContainer>
  );
}

export default Cart;
