import "../styles/studies.css";
import html from "../assets/icon/html-5.jpg";
import css from "../assets/icon/css-3.jpg";
import javascrip from "../assets/icon/js.jpg";
import react from "../assets/icon/react-js.jpg";
import node from "../assets/icon/node js.jpg";
import bootstrap from "../assets/icon/bootstrap.jpg";
import sass from "../assets/icon/sass.jpg";
import github from "../assets/icon/github.jpg";
import desarrolorWebCertificates from "../assets/certificates/Desarrollo web.jpg";
import javascripCertificates from "../assets/certificates/javaScript.jpg";
import reactCertificates from "../assets/certificates/React js.jpg";
import frontEndCertificates from "../assets/certificates/Front-End.jpg";
import { useState } from "react";

export const Studies = () => {
  const [isZoomed, setIsZoomed] = useState(false); // Controla si la imagen está ampliada

  const handleImageClick = () => {
    setIsZoomed(true); // Establece la imagen seleccionada
  };
  const closeZoom = () => {
    setIsZoomed(false); // Cierra el modo ampliado
  };
  return (
    <div className="conteiner-studies">
      <h3>Skills</h3>
      <p>
        Estoy especializada en diseño y desarrollo web con HTML5, CSS3 y
        JavaScript. Tengo experiencia desarrolando aplicaciones web con React y
        nunca me olvido de trabajar con herramientas como Sass, Gulp, Git o
        GitHub.
      </p>
      <div className="conteiner-icon-studies">
        <img src={html} alt="logo-html" className="logo-studies-html" />
        <img src={css} alt="logo-css" className="logo-studies-css" />
        <img
          src={javascrip}
          alt="logo-javascript"
          className="logo-studies-js"
        />
        <img src={react} alt="logo-react" className="logo-studies-react" />
        <img src={node} alt="logo-nodejs" className="logo-studies-node" />
        <img
          src={bootstrap}
          alt="logo-bootstrap"
          className="logo-studies-bootstrap"
        />
        <img src={sass} alt="logo-sass" className="logo-studies-sass" />
        <img src={github} alt="logo-github" className="logo-studies-github" />
      </div>
      <div className="conteiner-certificates">
        <img
          src={desarrolorWebCertificates}
          alt="certificates"
          className="certificates-studies"
          onClick={handleImageClick}
        />
        {isZoomed && (
          <div className="overlay" onClick={closeZoom}>
            <img
              src={desarrolorWebCertificates}
              alt="Ampliada"
              className="zoomed-image"
            />
          </div>
        )}
        <img
          src={javascripCertificates}
          alt="certificates"
          className="certificates-studies"
        />
        <img
          src={reactCertificates}
          alt="certificates"
          className="certificates-studies"
        />
        <img
          src={frontEndCertificates}
          alt="certificates"
          className="certificates-studies"
        />
      </div>
    </div>
  );
};
