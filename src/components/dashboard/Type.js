import React from "react";

function Type({ icon, title }) {
  return (
    <div className="type">
      <div className="type__container">
        <img src={icon} />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Type;
