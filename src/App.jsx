/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Catalog />}
      />
    </Routes>
  );
}

export default App;
