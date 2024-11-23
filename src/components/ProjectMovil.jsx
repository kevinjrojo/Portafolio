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
            <h4 className="tilte-proyect-movil">{Project.Name}</h4>
            <div className="card__content-proyect-movil">
              <p className="card__title-proyect-movil">{Project.Name}</p>
              <p className="card__description-proyect-movil"></p>
              <a
                href={Project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="card__link-movil"
              >
                Ir a app
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
