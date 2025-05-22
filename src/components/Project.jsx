import "../styles/project.css";
import { projects } from "../service/data.js";

export const Project = () => {
  return (
    <div className="main-container">
      <h2>Proyectos</h2>
      <main className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-info">
              <h3>{project.Name}</h3>
              <div>
                <a href={project.Link} target="_blank">
                  <strong>app</strong>
                </a>
                <a href={project.Link2} target="_blank">
                  <strong>code</strong>
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
