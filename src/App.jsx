import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Project } from "./components/Project";
import { Studies } from "./components/Studies";

function App() {
  return (
    <>
      <section className="secction">
        <Intro />
        <Information />
        <Project />
        <Studies />
      </section>
    </>
  );
}

export default App;
