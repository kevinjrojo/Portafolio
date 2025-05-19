import "../styles/project.css";
import { projects } from "../service/data.js";

export const Project = () => {
  return (
    <main className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div>
            <h3>{project.Name}</h3>
            <p>{project.Description}</p>
            <div>
              <a href={project.Link} target="_blank">
                <strong>Ir a app</strong>
              </a>
              <a href={project.Link2} target="_blank">
                <strong>Ir a code</strong>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
