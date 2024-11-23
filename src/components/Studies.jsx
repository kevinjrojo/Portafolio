import html from "../assets/icon/html-5.jpg";
import css from "../assets/icon/css-3.jpg";
import javascrip from "../assets/icon/js.jpg";
import react from "../assets/icon/react-js.jpg";
import node from "../assets/icon/node js.jpg";
import bootstrap from "../assets/icon/bootstrap.jpg";
import sass from "../assets/icon/sass.jpg";
import github from "../assets/icon/github.jpg";

export const Studies = () => {
  return (
    <div className="conteiner-studies">
      <h3>Skills</h3>
      <p>
        Estoy especializada en diseño y desarrollo web con HTML5, CSS3 y
        JavaScript. Tengo experiencia desarrolando aplicaciones web con React y
        nunca me olvido de trabajar con herramientas como Sass, Gulp, Git o
        GitHub.
      </p>
      <div className="icon-image-studies">
        <img src={html} alt="html" />
        <img src={css} alt="" />
        <img src={javascrip} alt="" />
        <img src={react} alt="" />
        <img src={node} alt="" />
        <img src={bootstrap} alt="" />
        <img src={sass} alt="" />
        <img src={github} alt="" />
      </div>
    </div>
  );
};
