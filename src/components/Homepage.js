import React from "react";
import Carousel from "./Carousel";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import BlogSection from "./BlogSection";

function Homepage({ className }) {
  return (
    <div className={`${className}`}>
      <Carousel />
      <AboutSection />
      <ProductsSection />
      <BlogSection />
    </div>
  );
}

export default Homepage;
