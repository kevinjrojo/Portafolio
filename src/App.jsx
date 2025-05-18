import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Studies } from "./components/Studies";
import { Contact } from "./components/Contact";
// import { InformationMovil } from "./components/InformationMovil";




function App() {
  return (
    <>
    <section className="secction">
      <Intro />
    <Information />
       {/* <InformationMovil /> */}
      {/* <Projects/> */}
      {/*<ProjectMovil Projects={projects} />*/}
      <Studies />
      <Contact /> 
      </section>
    </>
  );
}

export default App;
