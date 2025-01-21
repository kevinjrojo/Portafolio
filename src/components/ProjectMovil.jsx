import "../styles/project.css";

export const ProjectMovil = ({ Projects }) => {
  return (
    <div className="projects-container-movil">
      <nav className="conteiner-title-project">
        <strong className="title-movil-project">Proyectos</strong>
      </nav>
      <main className="conteiner-project-card-movil">
        {Projects.map((Project, index) => (
          <div key={index}>
            <div
              className="card-proyect-movil"
              style={{
                backgroundImage: `url(${Project.Image})`,
              }}
            >
              {" "}
              <strong className="tilte-proyect-movil">{Project.Name}</strong>
              <nav className="card_link_project_movil">
                {" "}
                <a
                  href={Project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link_app_movil"
                >
                  <strong>Ir a app</strong>
                </a>
                <a
                  href={Project.Link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link_code_movil"
                >
                  <strong>Ir a code</strong>
                </a>
              </nav>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
