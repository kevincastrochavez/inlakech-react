import React from "react";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

function CarouselItem({ title, text }) {
  return (
    <Paper>
      <h2>{title}</h2>
      <p>{text}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CarouselItem;
