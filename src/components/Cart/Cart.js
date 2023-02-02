import React from "react";

import "./Cart.css";
const Cart = (props) => {
  const { cart, clearCart, children } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * (10 / 100)).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="cart">
      <h3 className="cart-title">Order Summary:</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <br />
      {children}
    </div>
  );
};

export default Cart;
