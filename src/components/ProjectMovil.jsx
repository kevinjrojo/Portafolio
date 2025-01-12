export const ProjectMovil = ({ Projects }) => {
  return (
    <div className="projects-container-movil">
      <strong className="title-movil">Proyectos</strong>
      {Projects.map((Project, index) => (
        <div key={index} className="target-project-movil">
          <div
            className="card-proyect-movil"
            style={{
              backgroundImage: `url(${Project.Image})`,
            }}
          >
            <strong className="tilte-proyect-movil">${Project.Name}</strong>
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
    </div>
  );
};
