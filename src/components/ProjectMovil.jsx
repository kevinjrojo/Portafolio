import "../styles/project.css";
import { useState } from "react";
import { projects } from "../service/data.js";

export const ProjectMovil = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <main className="main-projects-movil">
      <span className="left" onClick={handlePrev}>
        《
      </span>
      <article className="projects-movil">
        <h2>Proyectos</h2>
        <div className="project-card-movil">
          <h3>{currentProject.Name}</h3>
          <p>{currentProject.Description}</p>
          <div className="project-link">
            <a
              href={currentProject.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>app</strong>
            </a>
            <a
              href={currentProject.Link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>code</strong>
            </a>
          </div>
        </div>
      </article>
      <span className="right" onClick={handleNext}>
        》
      </span>
    </main>
  );
};
