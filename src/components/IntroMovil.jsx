import "../styles/intro.css";
import { Link } from "react-scroll";
export const Intro = () => {
  return (
    <div className="hero-section">
      <p className="text-name">¡Hola! mi nombre es</p>
      <h1 className="name-profession">KEVIN JAVIER ROJO</h1>
      <p className="text-name">y soy</p>
      <h1 className="name-profession">FRONT-END DEVEPOPER</h1>
      <Link to="card__description" smooth={true} duration={500}>
        <button className="button">
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40" className="rotate-down">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40" className="rotate-down">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
              </svg>
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};
