import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
const Product = (props) => {
  const { name, price, ratings, img, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Manufacture: {seller}</p>
        <p className="product-rating">Ratings: {ratings} star</p>
      </div>
      <button
        onClick={() => props.addToCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
