import PropTypes from 'prop-types';
import React from 'react';
import ControllersContainer from './styles';
import Input from '../ui/controls/Input';
import Select from '../ui/controls/Select';

export default function CatalogControllers({
  handleFilter,
  setFilterSearchValue,
  filterSearchValue,
}) {
  const handleInputOnchange = (e) => {
    e.preventDefault();
    setFilterSearchValue(e.target.value);
  };
  return (
    <ControllersContainer>
      <Input
        type="text"
        name="search-products"
        placeholder="Buscar productos por nombre"
        onChange={handleInputOnchange}
        value={filterSearchValue}
      />
      <Select
        labelText="ORDENAR POR: "
        onChange={handleFilter}
        name="select-products"
        defaultValue="default"
        type="select"
      >
        <option value="default" disabled hidden>
          Seleccionar
        </option>
        <option value="1">Mas Barato</option>
        <option value="2">Mas Caro</option>
      </Select>
    </ControllersContainer>
  );
}

CatalogControllers.propTypes = {
  handleFilter: PropTypes.func,
  setFilterSearchValue: PropTypes.func,
  filterSearchValue: PropTypes.string,
};
