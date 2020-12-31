import { Facebook, Mail, WhatsApp } from "@material-ui/icons";
import React from "react";

function Footer({ className }) {
  return (
    <div className={`footer ${className}`}>
      <img src="https://source.unsplash.com/xljtGZ2-P3Y" alt="Footer image" />

      <div className="footer__container">
        <div className="footer__container-info">
          <div className="footer__container-info-links">
            <p>Productos</p>
            <p>Acerca</p>
            <p>Blog</p>
            <p>Contacto</p>
          </div>

          <div className="footer__container-info-contact">
            <div className="footer__container-info-contact-option">
              <Mail />
              <p>
                contacto.inlakechmid<br></br>@gmail.com
              </p>
            </div>

            <a
              href="https://www.facebook.com/In-Lakech-106384411203100"
              target="_blank"
              className="footer__container-info-contact-option"
            >
              <Facebook />
              <p>In Lak'ech</p>
            </a>

            <a
              href="https://wa.me/0527351829519?text=¡Hola! Me llamaron la atención tus productos, ¿Puedes darme más información?"
              target="_blank"
              className="footer__container-info-contact-option"
            >
              <WhatsApp />
              <p>555-555-5555</p>
            </a>
          </div>
        </div>

        <div className="footer__container-copyright">
          <p>© 2020 In Lak’ech</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
