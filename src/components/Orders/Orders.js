import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import "./Orders.css";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);
  //   console.log(products);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handleRemoveItem = (id) => {
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            You Have No Items!! <Link to="/">Please shop</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button>Proceed shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
