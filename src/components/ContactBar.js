import { WhatsApp, Facebook, Mail } from "@material-ui/icons";
import React from "react";

function ContactBar({ className }) {
  return (
    <div className={`contactBar ${className}`}>
      <div className="contactBar__container">
        <div className="contactBar__container-option">
          <Mail />
          <p>contacto.inlakechmid@gmail.com</p>
        </div>

        <a
          href="https://www.facebook.com/In-Lakech-106384411203100"
          target="_blank"
          className="contactBar__container-option"
        >
          <Facebook />
          <p>In Lak'ech</p>
        </a>

        <a
          href="https://wa.me/0527351829519?text=¡Hola! Me llamaron la atención tus productos, ¿Puedes darme más información?"
          target="_blank"
          className="contactBar__container-option"
        >
          <WhatsApp />
          <p>555-555-5555</p>
        </a>
      </div>
    </div>
  );
}

export default ContactBar;
