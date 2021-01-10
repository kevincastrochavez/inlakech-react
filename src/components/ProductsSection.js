import React from "react";
import { Link } from "react-router-dom";
import ProductsItem from "./ProductsItem";

function ProductsSections({ className, title }) {
  return (
    <div className={`productsSection ${className}`}>
      <div className="productsSection__container">
        <h1>{title}</h1>

        <div className="productsSection__container-items">
          <Link to="productos/plantas">
            <ProductsItem
              className="productsSection__container-item"
              url="https://source.unsplash.com/s5-NmxNA-7c"
              title="Plantas"
            />
          </Link>

          <Link to="productos/macetas">
            <ProductsItem
              className="productsSection__container-item"
              url="https://source.unsplash.com/u9BRh7YZYMk"
              title="Macetas"
            />
          </Link>

          <Link to="productos/colgantes">
            <ProductsItem
              className="productsSection__container-item"
              url="https://source.unsplash.com/XW5mTv7i3Ig"
              title="Colgantes"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsSections;
