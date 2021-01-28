import React from "react";
import ProductsItem from "./ProductsItem";

function Pots({ className, type }) {
  return (
    <div className={`pots ${className}`}>
      <div className="pots__container">
        <h1>{type}</h1>

        <div className="pots__container-items">
          <ProductsItem
            className="pots__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Macetas"
          />

          <ProductsItem
            className="pots__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Macetas 2"
          />
        </div>
      </div>
    </div>
  );
}

export default Pots;
