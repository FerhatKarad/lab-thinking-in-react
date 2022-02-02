import React from 'react';

export default function SearchBar(props) {
  return <div>
      <input 
      value={props.filter}
      onChange={props.searchHandlerProp}
      type='text'
      placeholder='Search'
      > Search Product</input> 
  </div>;
}
