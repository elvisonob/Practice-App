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

  const onAddToCart = (itemId) => {
    setCart((prevItems) => {
      return [itemId, ...prevItems];
    });
  };

  return (
    <div>
      <Cart cart={cart} />
      <ItemsDisplay onAddToCart={onAddToCart} items={items} />
    </div>
  );
};

export default App;
