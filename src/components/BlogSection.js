import React from "react";
import BlogItemScroll from "./BlogItemScroll";

function BlogSection({ className }) {
  return (
    <div className={`blogSection ${className}`}>
      <div className="blogSection__container">
        <h1>Blog</h1>

        <div className="blogSection__container-scroll">
          <BlogItemScroll className="blogSection__container-scroll-item" />
          <BlogItemScroll className="blogSection__container-scroll-item" />
          <BlogItemScroll className="blogSection__container-scroll-item" />
          <BlogItemScroll className="blogSection__container-scroll-item" />
          <BlogItemScroll className="blogSection__container-scroll-item" />
          <BlogItemScroll className="blogSection__container-scroll-item" />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
