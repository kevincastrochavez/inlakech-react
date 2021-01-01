import React from "react";

function BlogItemScroll({ className }) {
  return (
    <div className={`blogItemScroll ${className}`}>
      <div className="blogItemScroll__container">
        <img src="https://via.placeholder.com/154x63" alt="" />

        <h3>Lorem Ipsum</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry... <span>Ver más</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default BlogItemScroll;
