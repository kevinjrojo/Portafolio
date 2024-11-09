import "../styles/information.css";
import img from "../assets/cactus.jpg";
import { Element } from "react-scroll";
import { InformationMovil } from "./InformationMovil.jsx";

export const Information = () => {
  return (
    <div className="information-conteiner">
      <Element name="targetSection" className="target-section">
        <img src={img} alt="" className="imagen-autor" />
        <div className="information-content">
          <h2 className="information-title">Sobre mi</h2>
          <p className="information-descriptions">
            ¡Hola! Soy Kevin, un apasionado desarrollador front-end con
            experiencia en la creación de experiencias web excepcionales. Con
            más de 1 años de experiencia en el campo, me especializo en
            convertir diseños creativos en interfaces interactivas y
            funcionales. <br />
            <br /> He trabajado en proyectos emocionantes que van desde
            aplicaciones web responsivas hasta plataformas de comercio
            electrónico de alto rendimiento. Estoy familiarizado con una
            variedad de tecnologías front-end, incluyendo HTML5, CSS3,
            JavaScript y frameworks modernos como React.js. También tengo
            experiencia en el uso de herramientas de desarrollo como Webpack y
            Babel para optimizar el rendimiento y la compatibilidad del
            navegador. <br /> <br />
            Soy un solucionador de problemas creativo, siempre buscando nuevas
            formas de mejorar la experiencia del usuario y la eficiencia del
            código. Me enorgullece escribir código limpio, semántico y modular
            que cumpla con los estándares de la industria y sea fácil de
            mantener y escalar. Estoy emocionado por explorar nuevas
            oportunidades en el campo del desarrollo front-end y colaborar con
            equipos dinámicos en proyectos emocionantes. Si estás buscando un
            desarrollador comprometido con la excelencia y la innovación, ¡me
            encantaría conectar contigo!
          </p>
        </div>
        <InformationMovil />
      </Element>
    </div>
  );
};
