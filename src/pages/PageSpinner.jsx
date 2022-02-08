import React from 'react';
import Container from '../components/ui/containers/Container';
import PageContainer from '../components/ui/containers/PageContainer';
import Spinner from '../components/ui/Spinner';

function PageSpinner() {
  return (
    <PageContainer>
      <Container
        style={{ margin: 'auto', justifyContent: 'center', height: '90vh', alignItems: 'center' }}
      >
        <Spinner />
      </Container>
    </PageContainer>
  );
}

export default PageSpinner;
