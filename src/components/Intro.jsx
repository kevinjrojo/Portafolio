import "../styles/intro.css";

import photo from "../assets/photo.webp";
import photoMovil from "../assets/foto kevin 2.webp";

export const Intro = () => {

  return (
    <header className="intro" data-aos="fade-down">
      <article>
        <img src={photo} alt="Kevin Rojo" className="photo" />
         <img src={photoMovil} alt="Kevin Rojo" className="photo-movil" />
      </article>
      <article className="text-intro">
        <div>
        <p >¡Hola! mi nombre es</p>
         <h1>KEVIN JAVIER ROJO</h1>
         </div>
         <div>
       <p >y soy</p>
        <h1>FRONT-END DEVELOPER</h1>
        </div>
     </article>
     <article>
      <h2>Sobre mi</h2>
     </article>
    </header>
  );
};
