import React from 'react';

const ItemsDisplay = (props) => {
  const { items, onAddToCart } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            <img alt="images" src={item.image} />
            <div>{item.sku}</div>
            <div>{item.price}</div>
            <button onAddToCart={() => onAddToCart(item)}>Add to Basket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsDisplay;
