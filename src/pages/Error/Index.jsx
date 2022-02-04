import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import Box from '../../components/ui/Box';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';

function Error() {
  return (
    <PageContainer>
      <Title fontSize="xl">Estado de la Compra</Title>
      <Box direction="column" width="540px" m="2rem 0 0 0" p="2rem">
        <Text fontSize="md" fontWeight="400">
          Ocurrío un error con la compra, revisá que el importe no supere el crédito disponible en
          tu cuenta.
        </Text>
        <Button as={Link} to="/cart" m="2rem auto auto auto" size="full">
          Volver al carrito
        </Button>
      </Box>
    </PageContainer>
  );
}

export default Error;
