import React from "react";
import ProductsItem from "./ProductsItem";

function Products({ className }) {
  return (
    <div className={`products ${className}`}>
      <div className="products__container">
        <div className="products__container-section">
          <h1>Plantas</h1>

          <div className="products__container-section-items">
            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/FV_PxCqgtwc"
              title="Plantas"
            />

            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/FV_PxCqgtwc"
              title="Macetas"
            />

            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/FV_PxCqgtwc"
              title="Colgantes"
            />

            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/FV_PxCqgtwc"
              title="Colgantes"
            />
          </div>
        </div>

        <div className="products__container-section">
          <h1>Macetas</h1>

          <div className="products__container-section-items">
            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/2i7uCxZGptg"
              title="Plantas"
            />

            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/2i7uCxZGptg"
              title="Macetas"
            />
          </div>
        </div>

        <div className="products__container-section">
          <h1>Colgantes</h1>

          <div className="products__container-section-items">
            <ProductsItem
              className="products__container-section-item"
              url="https://source.unsplash.com/XW5mTv7i3Ig"
              title="Colgantes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
