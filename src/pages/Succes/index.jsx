import React from 'react';
import PageContainer from '../../components/ui/containers/PageContainer';
import Title from '../../components/ui/Title';
import Box from '../../components/ui/Box';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';

function Succes() {
  return (
    <PageContainer>
      <Title fontSize="xl">Estado de la Compra</Title>
      <Box direction="column" width="540px" m="2rem 0 0 0" p="2rem">
        <Text fontSize="md" fontWeight="400">
          La compra se realizó con exito.
        </Text>
        <Button m="2rem auto auto auto" size="full">
          Volver al catalógo
        </Button>
      </Box>
    </PageContainer>
  );
}

export default Succes;
