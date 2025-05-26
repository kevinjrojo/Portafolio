import "../styles/studies.css";
import desarrollowebcertificates from "../assets/certificates/desarrollo-web.webp";
import javascripcertificates from "../assets/certificates/javascript.webp";
import reactcertificates from "../assets/certificates/react-js.webp";
import frontendcertificates from "../assets/certificates/front-end.webp";
import { useState } from "react";
import { Icon } from "./Icon";

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
    desarrollowebcertificates,
    javascripcertificates,
    reactcertificates,
    frontendcertificates,
  ];
  return (
    <main className="main-skills">
      <div className="studies">
        <article className="text-studies">
          <h2>Skills</h2>
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
        <Icon />
      </div>
    </main>
  );
};
