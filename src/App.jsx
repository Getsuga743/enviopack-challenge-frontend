/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsContext } from './context/ProductsContext';
import { UserContext } from './context/UserContext';
import Catalog from './pages/Catalog';
import Layout from './pages/Layout';

function App() {
  const { loading: productsLoading } = React.useContext(ProductsContext);
  const { loading: userLoading } = React.useContext(UserContext);

  const isLoading = productsLoading && userLoading;

  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Catalog />} />
          <Route
            path="cart"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Cart</p>
              </main>
            }
          />
          <Route
            path="cart/succes"
            element={
              <main style={{ padding: '1rem' }}>
                <p>succes!</p>
              </main>
            }
          />
          <Route
            path="cart/error"
            element={
              <main style={{ padding: '1rem' }}>
                <p>error!</p>
              </main>
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
