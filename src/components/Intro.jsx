import "../styles/intro.css";
import photo from "../assets/photo.webp";
import photoMovil from "../assets/foto kevin 2.webp";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export const Intro = () => {
  return (
    <header className="intro">
      <article>
        <img src={photo} alt="author image" className="photo" />
        <img src={photoMovil} alt="author image" className="photo-movil" />
      </article>
      <article className="text-intro">
        <div className="text-presentation">
          <p>Hola,mi nombre es</p>
          <strong>KEVIN JAVIER ROJO</strong>
        </div>
        <hr />
        <div className="text-presentation">
          <p>y soy</p>
          <strong>FRONT-END DEVELOPER</strong>
        </div>
        <article className="icon-presentation">
          <a href="https://www.instagram.com/programacion_kr/" target="_blank">
            <FaInstagram className="icon" />
          </a>

          <a href="https://github.com/kevinjrojo" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-javier-rojo-a24492222/"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </a>
          <a href="https://wa.me/541126511587" target="_blank">
            <FaWhatsapp className="icon" />
          </a>
          <a href="/cv-frontend.docx" download="cv-frontend.docx">
            <TbFileCv className="icon" />
          </a>
        </article>
      </article>
    </header>
  );
};
