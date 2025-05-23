import "../styles/icon.css";
import js from "../assets/icon/js.webp";
import html from "../assets/icon/html.webp";
import css from "../assets/icon/css.webp";
import github from "../assets/icon/github.webp";
import nodejs from "../assets/icon/nodejs.webp";
import reactjs from "../assets/icon/reactjs.webp";
import sass from "../assets/icon/sass.webp";
import bootstrap from "../assets/icon/bootstrap.webp";
export const Icon = () => {
  return (
    <main className="icono">
      <img src={js} alt="js" className="iconos infinite1" />
      <img src={html} alt="js" className="iconos infinite2" />
      <img src={css} alt="js" className="iconos infinite3" />
      <img src={reactjs} alt="js" className="iconos infinite4" />
      <img src={bootstrap} alt="js" className="iconos infinite5" />
      <img src={nodejs} alt="js" className="iconos infinite6" />
      <img src={sass} alt="js" className="iconos infinite7" />
      <img src={github} alt="js" className="iconos infinite8" />
    </main>
  );
};
