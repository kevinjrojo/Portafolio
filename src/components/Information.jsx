import "../styles/information.css";
import img from "../assets/user/photo-kevin3.webp";

export const Information = () => {
  return (
    <main className="main-information">
      <div className="information-card">
        <img
          src={img}
          alt="imagen-autor"
          className="author-image"
          loading="lazy"
        />
        <article className="information-container">
          <h2>Sobre mi</h2>
          <p className="description">
            Hola, soy Kevin, un desarrollador front-end apasionado por crear
            experiencias digitales modernas y accesibles. Tengo más de 3 años de
            experiencia construyendo interfaces limpias, responsivas y
            funcionales, con un enfoque en rendimiento, escalabilidad y buenas
            prácticas.
            <br />
            <br />
            Me especializo en HTML5, CSS3, JavaScript y en el desarrollo con
            React.js. En el último tiempo he incorporado Tailwind CSS a mi
            stack, lo que me permite diseñar componentes con mayor rapidez y
            coherencia visual.
            <br /> <br />
            También tengo conocimientos básicos en tecnologías del lado del
            servidor,soy capaz de levantar un servidor usando Node.js y
            Express.js, lo cual me permite comprender mejor cómo interactúan los
            datos entre el front y el back. Tuve la oportunidad de utilizar base
            de datos como Mongo db.
            <br /> <br /> Disfruto escribir código limpio y modular, priorizando
            la experiencia del usuario y la mantenibilidad del proyecto. Siempre
            estoy buscando nuevos retos y oportunidades para crecer como
            desarrollador, colaborar en equipo y aportar soluciones sólidas
            desde el lado del cliente.
          </p>
        </article>
      </div>
    </main>
  );
};
