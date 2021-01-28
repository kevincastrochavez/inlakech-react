import React from "react";
import ProductsItem from "./ProductsItem";

function Plants({ className, type }) {
  return (
    <div className={`plants ${className}`}>
      <div className="plants__container">
        <h1>{type}</h1>

        <div className="plants__container-items">
          <ProductsItem
            className="plants__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Plantas"
          />

          <ProductsItem
            className="plants__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Plantas"
          />

          <ProductsItem
            className="plants__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Plantas"
          />

          <ProductsItem
            className="plants__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Plantas"
          />
        </div>
      </div>
    </div>
  );
}

export default Plants;
