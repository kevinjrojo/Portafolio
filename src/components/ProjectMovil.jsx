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
      <div className="right" onClick={handlePrev}>
        》
      </div>
      <div className="project-movil">
        <h2>Proyectos</h2>
        <article className="projects-movil">
          <div className="project-card-movil">
            <div className="project-card-info-movil">
              <h3>{currentProject.Name}</h3>
              <div>
                <a href={currentProject.Link} target="_blank">
                  <strong>app</strong>
                </a>
                <a href={currentProject.Link2} target="_blank">
                  <strong>code</strong>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="left" onClick={handleNext}>
        《
      </div>
    </main>
  );
};
