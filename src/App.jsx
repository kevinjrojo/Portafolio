import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { Proyect } from "./components/Proyect";

function App() {
  const Projects = [
    {
      Name: "Registro de Datos",
      Description:
        "Aplicación web para registrar y gestionar datos de usuarios.",
      Image: "./assets/projects/registro-datos.jpg",
      Link: "https://kevinjrojo.github.io/Registro_2/",
    },
    {
      Name: "Reproductor de musica",
      Description:
        "Plataforma de comercio electrónico para vender productos en línea.",
      Image: "./assets/projects/reproductor-musica.jpg",
      Link: "https://kevinjrojo.github.io/Music_Kr/",
    },
    {
      Name: "Creador de QR",
      Description:
        "Aplicación para gestionar tareas diarias y mejorar la productividad.",
      Image: "./assets/projects/qr.jpg",
      Link: "https://kevinjrojo.github.io/Generador-QR/",
    },
    {
      Name: "Citas Aleatorias",
      Description:
        "Aplicación para gestionar tareas diarias y mejorar la productividad.",
      Image: "./assets/projects/citas-aleatorias.jpg",
      Link: "https://kevinjrojo.github.io/Frases_aletorias/",
    },
    {
      Name: "Encuentra la palabra",
      Description:
        "Aplicación para gestionar tareas diarias y mejorar la productividad.",
      Image: "./assets/projects/juego-palabras.jpg",
      Link: "https://kevinjrojo.github.io/Juego_Palabras/",
    },
  ];

  return (
    <>
      <Intro />
      <Information />
      {Projects.map((project, index) => (
        <Proyect
          key={index}
          Title={project.Name}
          Description={project.Description}
          Image={project.Image}
          Link={project.Link}
        />
      ))}
    </>
  );
}

export default App;
