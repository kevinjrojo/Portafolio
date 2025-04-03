import "../styles/information.css";
import img from "../assets/cactus.jpg";
import { Element } from "react-scroll";
import { InformationMovil } from "./InformationMovil.jsx";

export const Information = () => {
  return (
    <div className="information-conteiner">
      <Element name="targetSection" className="target-section">
        <img
          src={img}
          alt="imagen cactus"
          className="imagen-autor"
          loading="lazy"
        />
        <div className="information-content">
          <p className="information-text">
            <h2>Sobre mi</h2>
            ¡Hola! Soy Kevin, un apasionado desarrollador front-end con
            experiencia en la creación de páginas web excepcionales. Con más de
            2 años de experiencia en el campo, me especializo en convertir
            diseños creativos en interfaces interactivas y funcionales. <br />
            <br /> He trabajado en proyectos emocionantes que van desde
            aplicaciones web responsivas hasta plataformas de comercio
            electrónico de alto rendimiento. Estoy familiarizado con una
            variedad de tecnologías front-end, incluyendo HTML5, CSS3,
            JavaScript y frameworks modernos como React.js. También tengo una
            básica experiencia en desarrolo Back-end con Node js y base de datos
            no relacional con Mongo db. <br /> <br />
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
