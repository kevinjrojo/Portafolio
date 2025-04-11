import "../styles/studies.css";
import html from "../assets/icon/html-5 (1).webp";
import css from "../assets/icon/css-3 (1).webp";
import javascrip from "../assets/icon/js (1).webp";
import react from "../assets/icon/react-js (1).webp";
import node from "../assets/icon/node js (1).webp";
import bootstrap from "../assets/icon/bootstrap (1).webp";
import sass from "../assets/icon/sass.webp";
import github from "../assets/icon/github (1).webp";
import desarrolorWebCertificates from "../assets/certificates/Desarrollo web.webp";
import javascripCertificates from "../assets/certificates/javaScript.webp";
import reactCertificates from "../assets/certificates/React js.webp";
import frontEndCertificates from "../assets/certificates/Front-End.webp";
import { useState } from "react";

export const Studies = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };
  const closeZoom = () => {
    setIsZoomed(false);
    setSelectedImage(null);
  };
  const images = [
    desarrolorWebCertificates,
    javascripCertificates,
    reactCertificates,
    frontEndCertificates,
  ];
  return (
    <div className="conteiner-studies">
      <article className="text-conteiner-studies">
        <strong className="title-studies">Skills</strong>
        <p className="description-studies">
     Front-end developer con experiencia en React, SPA y consumo de APIs. Uso HTML, CSS, JavaScript y librerías como Bootstrap y Chakra.
        </p>
      </article>
      <div className="conteiner-certificates">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="certificates-studies"
            loading="lazy"
          />
        ))}
      </div>
      {isZoomed && (
        <div className="overlay" onClick={closeZoom}>
          <img
            src={selectedImage}
            alt="Ampliada"
            className="zoomed-image"
            loading="lazy"
          />
        </div>
      )}
      <div className="conteiner-icon-studies">
        <img
          src={html}
          alt="logo-html"
          className="logo-studies-html"
          loading="lazy"
        />
        <img
          src={css}
          alt="logo-css"
          className="logo-studies-css"
          loading="lazy"
        />
        <img
          src={javascrip}
          alt="logo-javascript"
          className="logo-studies-js"
        />
        <img
          src={react}
          alt="logo-react"
          className="logo-studies-react"
          loading="lazy"
        />
        <img
          src={node}
          alt="logo-nodejs"
          className="logo-studies-node"
          loading="lazy"
        />
        <img
          src={bootstrap}
          alt="logo-bootstrap"
          className="logo-studies-bootstrap"
          loading="lazy"
        />
        <img
          src={sass}
          alt="logo-sass"
          className="logo-studies-sass"
          loading="lazy"
        />
        <img
          src={github}
          alt="logo-github"
          className="logo-studies-github"
          loading="lazy"
        />
      </div>
    </div>
  );
};
