import React from "react";

export default function Product(props) {
  return (
    <div>
      <img src={props.src} alt="product" />
      <div className="product-information">
        <h2>{props.product.name}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <p>Counter</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
