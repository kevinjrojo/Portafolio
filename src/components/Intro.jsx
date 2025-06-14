import "../styles/intro.css";
import photo from "../assets/user/photo-kevin2.webp";
import photoMovil from "../assets/user/photo-kevin1.webp";
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
          <a
            href="https://www.instagram.com/programacion_kr/"
            target="_blank"
            className="intro-icon"
          >
            <FaInstagram className="icon" />
          </a>

          <a
            href="https://github.com/kevinjrojo"
            target="_blank"
            className="intro-icon"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-javier-rojo-a24492222/"
            target="_blank"
            className="intro-icon"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://wa.me/541126511587"
            target="_blank"
            className="intro-icon"
          >
            <FaWhatsapp className="icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1E3A3JhVESXbrypKhIAZY713D3khDsnp1/view?usp=sharing"
            target="_blank"
            className="intro-icon"
          >
            <TbFileCv className="icon" />
          </a>
        </article>
      </article>
    </header>
  );
};
