import React from 'react';

export default function SearchBar(props) {

  return <div>
      <h1>hello SearchBar</h1>
       <form>
        <input  value={props.filter} onChange={props.searchHandlerProp} type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" checked={props.checked} onChange={props.checkedHandlerProp} />
          {' '}
          Only show products in stock
        </p>
      </form>
  </div>;
}
