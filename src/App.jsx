import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Studies } from "./components/Studies";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <section className="secction">
        <Intro />
        <Information />
        <Project />
        <Studies />
        <Contact />
      </section>
    </>
  );
}

export default App;
