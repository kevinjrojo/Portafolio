import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Studies } from "./components/Studies";
import { Contact } from "./components/Contact";




function App() {
  return (
    <>
    <section className="secction">
      <Intro />
    <Information />
       
      {/* <Projects/> */}
      {/*<ProjectMovil Projects={projects} />*/}
      <Studies />
      <Contact /> 
      </section>
    </>
  );
}

export default App;
