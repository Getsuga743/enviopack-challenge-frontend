import React from 'react';
import ControllersContainer from './styles';
import Input from '../ui/controls/Input';
import Select from '../ui/controls/Select';

export default function CatalogControllers() {
  return (
    <ControllersContainer>
      <Input type="search" name="search-products" placeholder="Buscar productos por nombre" />
      <Select labelText="ORDENAR POR: " name="select-products" defaultValue="default" type="select">
        <option value="default" disabled hidden>
          Seleccionar
        </option>
        <option value="1">Mas Barato</option>
        <option value="2">Mas Caro</option>
      </Select>
    </ControllersContainer>
  );
}
