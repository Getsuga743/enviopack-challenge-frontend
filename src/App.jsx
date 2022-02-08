/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/ui/containers/Container';
import PageContainer from './components/ui/containers/PageContainer';
import Spinner from './components/ui/Spinner';
import useUser from './hooks/useUser';

import Layout from './pages/Layout';

const CatalogPage = React.lazy(() => import('./pages/Catalog'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const ErrorPage = React.lazy(() => import('./pages/Error/Index'));
const SuccessPage = React.lazy(() => import('./pages/Success'));

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
          <Route
            index
            element={
              <React.Suspense fallback={<Spinner />}>
                <CatalogPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<Spinner />}>
                <CartPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart/success"
            element={
              <React.Suspense fallback={<Spinner />}>
                <SuccessPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart/error"
            element={
              <React.Suspense fallback={<Spinner />}>
                <ErrorPage />
              </React.Suspense>
            }
          />
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
