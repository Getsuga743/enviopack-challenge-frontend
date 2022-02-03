import React from 'react';
import Box from '../../components/ui/Box';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import CartButtons from './styles';
import CartItems from '../../components/CartItems';
import CartItem from '../../components/CartItem';

function Cart() {
  return (
    <PageContainer>
      <Title fontSize="xl">Carrito</Title>
      <CartItems>
        <CartItem title="Celular Motorola E7 32 GB Gris" price={2000} />
      </CartItems>
      <Box height="5rem" width="lg" m="auto auto 2rem auto">
        <span>Total</span>
        <span>$ 10000</span>
      </Box>
      <CartButtons>
        <Button>Volver al catálogo</Button>
        <Button>Finalizar Compra</Button>
      </CartButtons>
    </PageContainer>
  );
}

export default Cart;
