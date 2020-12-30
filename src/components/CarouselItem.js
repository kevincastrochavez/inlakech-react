import React from "react";
import { Button } from "@material-ui/core";

function CarouselItem({ className, src, alt, title, text, btnText }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{text}</p>

      <Button className="carouselItem__checkButton">{btnText}</Button>
    </div>
  );
}

export default CarouselItem;
