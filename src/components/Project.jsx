import "../styles/project.css";

export const Project = ({ Projects }) => {
  return (
    <div className="projects-container">
      <strong className="title">Proyectos</strong>
      {Projects.map((Project, index) => (
        <div key={index} className="target-project">
          <div
            className="card-proyect"
            style={{
              backgroundImage: `url(${Project.Image})`,
            }}
          >
            <h3 className="tilte-proyect">{Project.Name}</h3>
            <div className="card__content-proyect">
              <p className="card__title-proyect">{Project.Name}</p>
              <p className="card__description-proyect">{Project.Description}</p>
              <a
                href={Project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="card__link"
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
