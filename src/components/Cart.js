const Cart = (props) => {
  const { cart } = props;

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.sku}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
