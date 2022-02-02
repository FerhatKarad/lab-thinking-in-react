import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (<div>
    <table>
      <tr>
        <th> Name </th>
        <th> Price </th>
      </tr>
      {props.filteredProp.map((product) => 
      <ProductRow product={product} />
      )}
    </table>
  </div>);
}
