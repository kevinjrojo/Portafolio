import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { ProjectMovil } from "./components/ProjectMovil.jsx";
import { Project } from "./components/Project.jsx";
import qr from "./assets/projects/qr.webp";
import juegoPalabras from "./assets/projects/juego-palabras.webp";
import loop from "./assets/projects/loop.webp";
import { Studies } from "./components/Studies.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  const projects = [
    {
      Name: "Loop",
      Description:
        "Red social en desarrollo que permite a los usuarios compartir fotos, interactuar y conectar con amigos de manera sencilla.",
      Image: loop,
      Link: "https://kevinjrojo.github.io/Loop/",
      Link2: "https://github.com/kevinjrojo/Loop/",
    },
    {
      Name: "Generador de QR",
      Description:
        "Herramienta práctica para generar códigos QR personalizados, desarrollada con HTML, CSS, JavaScript y una API externa para la funcionalidad.",
      Image: qr,
      Link: "https://kevinjrojo.github.io/Generador-QR/",
      Link2: "https://github.com/kevinjrojo/Generador-QR?tab=readme-ov-file",
    },

    {
      Name: "Encuentra la Palabra",
      Description:
        "Juego interactivo diseñado para encontrar palabras ocultas, ideal para mejorar habilidades lógicas y pasar un rato entretenido.",
      Image: juegoPalabras,
      Link: "https://kevinjrojo.github.io/Juego_Palabras/",
      Link2: "https://github.com/kevinjrojo/Juego_Palabras",
    },
  ];

  return (
    <>
      <Intro />
      <Information />
      <Project Projects={projects} />
      <ProjectMovil Projects={projects} />
      <Studies />
      <Contact />
    </>
  );
}

export default App;
