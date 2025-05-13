import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { ProjectMovil } from "./components/ProjectMovil.jsx";
import { Project } from "./components/Project.jsx";
import { projects } from "./service/data.js";
import { Studies } from "./components/Studies.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Intro />
      {/* <Information />
      <Project Projects={projects} />
      <ProjectMovil Projects={projects} />
      <Studies />
      <Contact /> */}
    </>
  );
}

export default App;
