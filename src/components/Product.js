import React from 'react';

export default function Product({ product, onAddToCart }) {
  const { title, price, thumbnail
  } = product;
  return (
    <div className="product">
      <p>
        {title}
      </p>
      <p>
        {price}
      </p>
      <img src={thumbnail} alt={thumbnail} />
      <button onClick={() => onAddToCart(product)}>Adicionar ao carrinho</button>
    </div>
  )
}
