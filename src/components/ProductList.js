import React from 'react';
import Product from './Product';
export default function ProductList({ products }) {
  return (
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} onAddToCart={console.log} />
        </li>
      ))}
    </ul>
  )
}
