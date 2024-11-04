import "../styles/intro.css";

export const Intro = () => {
  return (
    <div className="hero-section">
      <p className="text-name">¡Hola! mi nombre es</p>
      <h1 className="name-profession">KEVIN JAVIER ROJO</h1>
      <p className="text-name">y soy</p>
      <h1 className="name-profession">FRONT-END DEVEPOPER</h1>

      <button className="button">
        <svg viewBox="0 0 384 512" className="svgIcon arrow-down">
          <path d="M214.6 41.4c-12.5-12.5-32.8-1.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
  );
};
