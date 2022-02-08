import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageSpinner from './pages/PageSpinner';
import useUser from './hooks/useUser';
import Layout from './pages/Layout';

const CatalogPage = React.lazy(() => import('./pages/Catalog'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const ErrorPage = React.lazy(() => import('./pages/Error/Index'));
const SuccessPage = React.lazy(() => import('./pages/Success'));

function App() {
  const { loading } = useUser();

  if (loading) return <PageSpinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<PageSpinner />}>
                <CatalogPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<PageSpinner />}>
                <CartPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart/success"
            element={
              <React.Suspense fallback={<PageSpinner />}>
                <SuccessPage />
              </React.Suspense>
            }
          />
          <Route
            path="cart/error"
            element={
              <React.Suspense fallback={<PageSpinner />}>
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
