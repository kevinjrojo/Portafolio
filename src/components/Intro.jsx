import "../styles/intro.css";

import photo from "../assets/photo.webp";
import photoMovil from "../assets/foto kevin 2.webp";

export const Intro = () => {

  return (
    <div className="intro" data-aos="fade-down">
      <header>
        <img src={photo} alt="Kevin Rojo" className="photo" />
         <img src={photoMovil} alt="Kevin Rojo" className="photo-movil" />
      </header>
      <article className="text-intro">
        <p >¡Hola! mi nombre es</p>
        <h1>KEVIN JAVIER ROJO</h1>
        <p >y soy</p>
        <h1>FRONT-END DEVELOPER</h1>

     </article>
    </div>
  );
};
