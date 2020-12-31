import React from "react";

function ProductsItem({ className, url, title }) {
  return (
    <div className={`productsItem ${className}`}>
      <img src={url} alt={url} />

      <div className="productsItem__box">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ProductsItem;
