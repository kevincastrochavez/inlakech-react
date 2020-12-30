import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

function Caroussel({ className }) {
  const carouselItems = [
    {
      className: "carouselItem",
      src: "https://source.unsplash.com/5A06OWU6Wuc",
      alt: "First slide",
      name: "Escoge tu planta",
      description:
        "Contamos con una gran variedad, ¡Seguro encontrarás tu favorita!",
      btnText: "Ver Plantas",
    },
    {
      className: "carouselItem",
      src: "https://source.unsplash.com/C6oPXOatFD8",
      alt: "Second slide",
      name: "Elige tu maceta",
      description: "El lugar donde se refugia tu planta es muy importante",
      btnText: "Ver Macetas",
    },
    {
      className: "carouselItem carouselItem__whiteText",
      src: "https://source.unsplash.com/XW5mTv7i3Ig",
      alt: "Third slide",
      name: "Adquiere un colgante",
      description: "Tu casa lucirá radiante con tus plantas colgando",
      btnText: "Ver Colgantes",
    },
  ];

  return (
    <Carousel indicators={false} interval={6000} className={className}>
      {carouselItems.map((item, i) => (
        <CarouselItem
          key={i}
          className={item.className}
          src={item.src}
          alt={item.alt}
          title={item.name}
          text={item.description}
          btnText={item.btnText}
        />
      ))}
    </Carousel>
  );
}

export default Caroussel;
