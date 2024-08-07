import React from "react";
import "./Product.css";
import Badge from "./Badge";

function Product({ title, brand, price, imgLink, rating }) {
  return (
    <div className="Product">
      <img src={imgLink} alt="image" className="product-image" />
      <div className="product-description">
        <Badge rating={rating} />
        <div className="title">{title}</div>
        <p className="brand">{brand}</p>
        <p className="price">${price}</p>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
