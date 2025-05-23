import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Project } from "./components/Project";
import { Studies } from "./components/Studies";
import { ProjectMovil } from "./components/ProjectMovil";

function App() {
  return (
    <>
      <section className="secction">
        <Intro />
        <Information />
        <Project />
        <ProjectMovil />
        <Studies />
      </section>
    </>
  );
}

export default App;
