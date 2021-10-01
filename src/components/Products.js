import React from 'react';
import { store } from './state/store';

function Products() {
  const currentState = store.getState();
  return (
    <section className='products'>
      <div className='container'>
        <h2 className='display-2'>Products</h2>
      </div>
    </section>
  );
}

export default Products;
