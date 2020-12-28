import { Call, Facebook, Mail } from "@material-ui/icons";
import React from "react";

function ContactBar({ className }) {
  return (
    <div className={`contactBar ${className}`}>
      <div className="contactBar__container">
        <div className="contactBar__container-option">
          <Mail />
          <p>contacto.inlakechmid@gmail.com</p>
        </div>

        <div className="contactBar__container-option">
          <Facebook />
          <p>In Lak'ech</p>
        </div>

        <div className="contactBar__container-option">
          <Call />
          <p>555-555-5555</p>
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
