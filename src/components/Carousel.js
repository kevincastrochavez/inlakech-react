import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

function Caroussel({ className }) {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel className={className}>
      {items.map((item, i) => (
        <CarouselItem
          key={i}
          item={item}
          title={item.name}
          text={item.description}
        />
      ))}
    </Carousel>
  );
}

export default Caroussel;
