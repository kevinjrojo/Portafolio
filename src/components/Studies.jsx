import "../styles/studies.css";
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
    <main className="main-skills">
      <div className="studies">
        <article className="text-studies">
          <strong>Skills</strong>
          <p>
            Front-end developer con experiencia en React, SPA y consumo de APIs.
            Uso HTML, CSS, JavaScript y librerías como Bootstrap y Chakra.
          </p>
        </article>
        <div className="certificates">
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
      </div>
    </main>
  );
};
