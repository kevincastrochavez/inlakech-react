import React from "react";
import { Link } from "react-router-dom";

function AboutSection({ className }) {
  return (
    <div className={`aboutSection ${className}`}>
      <div className="aboutSection__container">
        <h1>Acerca</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
          <Link to="/acerca">
            <span>Ver más...</span>
          </Link>
        </p>

        <div className="aboutSection__container-images">
          <img src="https://source.unsplash.com/CMdQcxsWZE0" alt="About 1" />
          <img src="https://source.unsplash.com/ONKFhJGLv9k" alt="About 2" />
          <img src="https://source.unsplash.com/DpphPG9ENsI" alt="About 3" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
