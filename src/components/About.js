import React from "react";

function About({ className }) {
  return (
    <div className={`about ${className}`}>
      <div className="about__container">
        <h1>Acerca</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="about__container-images">
          <img src="https://source.unsplash.com/CMdQcxsWZE0" alt="About 1" />
          <img src="https://source.unsplash.com/ONKFhJGLv9k" alt="About 2" />
          <img src="https://source.unsplash.com/DpphPG9ENsI" alt="About 3" />
        </div>
      </div>
    </div>
  );
}

export default About;
