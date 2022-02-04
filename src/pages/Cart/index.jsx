import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '../../components/ui/Box';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import CartButtons from './styles';
import CartItems from '../../components/CartItems';
import CartItem from '../../components/CartItem';
import Text from '../../components/ui/Text';
import useCart from '../../hooks/useCart';
import useUser from '../../hooks/useUser';

function Cart() {
  const navigate = useNavigate();
  const {
    cartState: { products, total },
    handleRemoveCartById,
    handleRemoveAll,
  } = useCart();
  const { handleBuyFromUser, user } = useUser();
  const handleBuy = () => {
    if (total <= user.credit) {
      handleBuyFromUser(total);
      handleRemoveAll();
      navigate('/cart/success');
    } else {
      navigate('/cart/error');
    }
  };
  const formatedTotal = new Intl.NumberFormat('es-AR').format(total);
  return (
    <PageContainer>
      <Title fontSize="xl">Carrito</Title>
      <CartItems>
        {products.length === 0 ? (
          <Text fontweight="400">No tienes Productos</Text>
        ) : (
          products.map((product) => (
            <CartItem
              handleRemove={handleRemoveCartById}
              title={product.title}
              price={product.price}
              key={product.sku}
              id={product.id}
            />
          ))
        )}
      </CartItems>
      <Box height="5rem" width="lg" m="auto auto 2rem auto" justifyContent="space-between">
        <Text fontSize="md" fontWeight="bold">
          Total
        </Text>
        <Text fontSize="md" fontWeight="bold">
          $ {formatedTotal}
        </Text>
      </Box>
      <CartButtons>
        <Button as={Link} to="/" m="0" fontSize="md">
          Volver al catálogo
        </Button>
        <Button m="0" disabled={products.length === 0} fontSize="md" onClick={handleBuy}>
          Finalizar Compra
        </Button>
      </CartButtons>
    </PageContainer>
  );
}

export default Cart;
