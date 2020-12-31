import React from "react";
import ProductsItem from "./ProductsItem";

function ProductsSections({ className }) {
  return (
    <div className={`productsSection ${className}`}>
      <div className="productsSection__container">
        <h1>Nuestros Productos</h1>

        <ProductsItem
          className="productsSection__container-item"
          url="https://source.unsplash.com/s5-NmxNA-7c"
          title="Plantas"
        />

        <ProductsItem
          className="productsSection__container-item"
          url="https://source.unsplash.com/u9BRh7YZYMk"
          title="Macetas"
        />

        <ProductsItem
          className="productsSection__container-item"
          url="https://source.unsplash.com/XW5mTv7i3Ig"
          title="Colgantes"
        />
      </div>
    </div>
  );
}

export default ProductsSections;
