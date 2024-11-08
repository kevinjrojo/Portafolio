import "../styles/information.css";
import img from "../assets/cactus.jpg";
import { Element } from "react-scroll";

export const Information = () => {
  return (
    <div className="information-conteiner">
      <Element name="targetSection" className="target-section">
        <img src={img} alt="" className="imagen-autor" />
        <div className="card-" />
        <div className="card">
          <svg
            xmlns="https://pixabay.com/get/g62e5c6369a189aade3a906aa46d4210685d62700efaca3ad830da65d1889a20fad35c2f5c9aaebd34394a5caaa243774.svg"
            viewBox="0 0 24 24"
          >
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
          <div className="card__content">
            <p className="card__title">Sobre Mi</p>
            <p className="card__description">
              ¡Hola! Soy Kevin, un apasionado desarrollador front-end con
              experiencia en la creación de experiencias web excepcionales. Con
              más de 1 años de experiencia en el campo, me especializo en
              convertir diseños creativos en interfaces interactivas y
              funcionales. Estoy familiarizado con una variedad de tecnologías
              front-end, incluyendo HTML5, CSS3, JavaScript y frameworks
              modernos como React.js. Me enorgullece escribir código limpio,
              semántico y modular que cumpla con los estándares de la industria
              y sea fácil de mantener y escalar. Estoy emocionado por explorar
              nuevas oportunidades en el campo del desarrollo front-end y
              colaborar con equipos dinámicos en proyectos emocionantes. Si
              estás buscando un desarrollador comprometido con la excelencia y
              la innovación, ¡me encantaría conectar contigo!
            </p>
          </div>
        </div>
      </Element>
    </div>
  );
};
