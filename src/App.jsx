import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { ProjectMovil } from "./components/ProjectMovil.jsx";
import { Project } from "./components/Project.jsx";
import registroDatos from "./assets/projects/registro-datos.webp";
import reproductorMusica from "./assets/projects/reproductor-musica.webp";
import qr from "./assets/projects/qr.webp";
import citasAleatorias from "./assets/projects/citas-aleatorias.webp";
import juegoPalabras from "./assets/projects/juego-palabras.webp";
import loop from "./assets/projects/loop.webp";
import { Studies } from "./components/Studies.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  const projects = [
    {
      Name: "Registro de Datos",
      Description:
        "Aplicación web desarrollada con HTML, CSS y JavaScript que permite ingresar datos y enviarlos por correo electrónico utilizando el servicio de FormSubmit.",
      Image: registroDatos,
      Link: "https://kevinjrojo.github.io/Registro_2/",
      Link2: "https://github.com/kevinjrojo/Registro_2?tab=readme-ov-file",
    },
    {
      Name: "Reproductor de Música",
      Description:
        "Reproductor de música interactivo creado con HTML, CSS y JavaScript, que incluye controles básicos como reproducir, pausar y cambiar de pista.",
      Image: reproductorMusica,
      Link: "https://kevinjrojo.github.io/Music_Kr/",
      Link2: "https://github.com/kevinjrojo/Music_Kr?tab=readme-ov-file",
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
      Name: "Citas Aleatorias",
      Description:
        "Aplicación que genera citas inspiradoras de personajes famosos, utilizando HTML, CSS, JavaScript y una API para obtener las frases.",
      Image: citasAleatorias,
      Link: "https://kevinjrojo.github.io/Frases_aletorias/",
      Link2: "https://github.com/kevinjrojo/Frases_aletorias",
    },
    {
      Name: "Encuentra la Palabra",
      Description:
        "Juego interactivo diseñado para encontrar palabras ocultas, ideal para mejorar habilidades lógicas y pasar un rato entretenido.",
      Image: juegoPalabras,
      Link: "https://kevinjrojo.github.io/Juego_Palabras/",
      Link2: "https://github.com/kevinjrojo/Juego_Palabras",
    },
    {
      Name: "Loop",
      Description:
        "Red social en desarrollo que permite a los usuarios compartir fotos, interactuar y conectar con amigos de manera sencilla.",
      Image: loop,
      Link: "https://kevinjrojo.github.io/Loop/",
      Link2: "https://github.com/kevinjrojo/Loop/",
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
