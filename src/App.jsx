import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";

import { Studies } from "./components/Studies";
import { Project } from "./components/Project";

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
