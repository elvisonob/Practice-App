import React, { useState, useEffect } from 'react';
import ItemsDisplay from './ItemsDisplay';
import Cart from './Cart';

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchedItems = async () => {
    const response = await fetch(
      'https://jsainsburyplc.github.io/front-end-test/products.json'
    );
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchedItems();
  }, []);

  const onAddToCartHandler = (product) => {
    setCart((prevExistedItem) => {
      return [product, ...prevExistedItem];
    });
  };

  return (
    <div>
      <Cart cart={cart} />
      <ItemsDisplay onAddToCart={onAddToCartHandler} items={items} />
    </div>
  );
};

export default App;
