const Cart = (props) => {
  const { cart } = props;

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li>{item.sku}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
