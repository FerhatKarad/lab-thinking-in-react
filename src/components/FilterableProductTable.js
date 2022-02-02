import React from 'react';
import { useState } from 'react';
import jsonData from './../../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState('')
  const [checked, setChecked] = useState(false)

  let filtered = products.data.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase()))

  const searchHandler = (e) => {
    setFilter(e.target.value)
  }

  const checkedHandler = (e) => {
    setChecked(e.target.checked)
  }

  if (checked) {
    filtered = filtered.filter((product) => {
      return product.stocked === true
    })
  }


  return (
    <div>
      <h1> Iron Store</h1>
      <SearchBar
        filter={filter}
        checked={checked}
        searchHandlerProp={searchHandler}
        checkedHandlerProp={checkedHandler}
      />
      <ProductTable filteredProp={filtered} products={products} />
    </div>
  );
}
