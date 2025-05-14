import "../styles/intro.css";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"
import photo from "../assets/photo.webp";

export const Intro = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  return (
    <div className="intro" data-aos="fade-down">
      <header>
        <img src={photo} alt="Kevin Rojo" className="photo" />
      </header>
      <article className="text-intro">
        <p>¡Hola! mi nombre es</p>
        <h1>KEVIN JAVIER ROJO</h1>
        <p>y soy</p>
        <h1>FRONT-END DEVELOPER</h1>

     </article>
    </div>
  );
};
