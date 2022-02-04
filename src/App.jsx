/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/ui/containers/Container';
import PageContainer from './components/ui/containers/PageContainer';
import Spinner from './components/ui/Spinner';
import useUser from './hooks/useUser';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Error from './pages/Error/Index';
import Layout from './pages/Layout';
import Success from './pages/Success';

function App() {
  const { loading } = useUser();

  if (loading)
    return (
      <PageContainer>
        <Container
          style={{ margin: 'auto', justifyContent: 'center', height: '90vh', alignItems: 'center' }}
        >
          <Spinner />
        </Container>
      </PageContainer>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/success" element={<Success />} />
          <Route path="cart/error" element={<Error />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Upps! no hay nada aquí</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
