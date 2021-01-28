import React from "react";
import ProductsItem from "./ProductsItem";

function Hangers({ className, type }) {
  return (
    <div className={`hangers ${className}`}>
      <div className="hangers__container">
        <h1>{type}</h1>

        <div className="hangers__container-items">
          <ProductsItem
            className="hangers__container-item"
            url="https://source.unsplash.com/FV_PxCqgtwc"
            title="Colgantes"
          />
        </div>
      </div>
    </div>
  );
}

export default Hangers;
