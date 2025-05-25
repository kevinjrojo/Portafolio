import "../styles/project.css";
import { useState } from "react";
import { projects } from "../service/data.js";
import github from "../assets/icon/github.webp";
import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";

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
    <main className="main-projects">
      <span className="left" onClick={handlePrev}>
        <TiChevronLeft />
      </span>
      <article className="projects">
        <h2>Proyecto</h2>
        <div className="project-content">
          <strong>
            ￣￣￣￣￣￣￣
            <br />○
          </strong>
          <div className="project-card">
            <h3>{currentProject.Name}</h3>
            <img
              src={currentProject.Image}
              alt={currentProject.Name}
              className="project-image"
            />
            <img
              src={currentProject.Image2}
              alt={currentProject.Name}
              className="project-image-movil"
            />
          </div>
        </div>
        <div className="project-link">
          <a
            href={currentProject.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={currentProject.Icon}
              alt={currentProject.Name}
              className="project-icon"
            />
          </a>
          <a
            href={currentProject.Link2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt={currentProject.Name}
              className="project-icon"
            />
          </a>
        </div>
      </article>
      <span className="right" onClick={handleNext}>
        <TiChevronRight />
      </span>
    </main>
  );
};
