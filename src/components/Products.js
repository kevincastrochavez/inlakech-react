import React from "react";
import Plants from "./Plants";
import Pots from "./Pots";
import Hangers from "./Hangers";

function Products({ className }) {
  return (
    <div className={`products ${className}`}>
      <Plants className="products__plants" type="Plantas" />
      <Pots className="products__pots" type="Macetas" />
      <Hangers className="products__hangers" type="Colgantes" />
    </div>
  );
}

export default Products;
