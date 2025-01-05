import "./App.css";
import { Information } from "./components/Information";
import { Intro } from "./components/Intro";
import { ProjectMovil } from "./components/ProjectMovil.jsx";
import { Project } from "./components/Project.jsx";
import registroDatos from "./assets/projects/registro-datos.jpg";
import reproductorMusica from "./assets/projects/reproductor-musica.jpg";
import qr from "./assets/projects/qr.jpg";
import citasAleatorias from "./assets/projects/citas-aleatorias.jpg";
import juegoPalabras from "./assets/projects/juego-palabras.jpg";
import { Studies } from "./components/Studies.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  // Lista de proyectos
  const projects = [
    {
      Name: "Registro de Datos",
      Description:
        "Formulario web creado con hmtl,css,javascript vanilla. En el formulario los usuarios pueden ingresar sus datos en los campos específicos. Al terminar los datos son enviados a un correo con ayuda de formSubmit.",
      Image: registroDatos,
      Link: "https://kevinjrojo.github.io/Registro_2/",
      Link2: "https://github.com/kevinjrojo/Registro_2?tab=readme-ov-file",
    },
    {
      Name: "Reproductor música",
      Description:
        "Reproductor de musica creado con hmtl,css y javascript vanilla. Este reproductor tiene funcionalidedes de pausar,renudar,siguiente, anterior y tambien manipular el tiempo de reproduccion.",
      Image: reproductorMusica,
      Link: "https://kevinjrojo.github.io/Music_Kr/",
      Link2: "https://github.com/kevinjrojo/Music_Kr?tab=readme-ov-file",
    },
    {
      Name: "Creador de QR",
      Description:
        "Creador de codigo QR,el Proyecto fue creado con hmtl,css,javascript vanilla y una API. Solo con una url puede crear un QR personal el cual van a poder descargar o copiar el enlace del mismo.",
      Image: qr,
      Link: "https://kevinjrojo.github.io/Generador-QR/",
      Link2: "https://github.com/kevinjrojo/Generador-QR?tab=readme-ov-file",
    },
    {
      Name: "Citas Aleatorias",
      Description:
        "Un creador de citas aleatorias de famosos creado con hmtl,css,javascript vanilla y una API. En el proyecto van a encontrar dos botones,uno para copiar la cita y otro para cambiar por otra cita aleatoria.",
      Image: citasAleatorias,
      Link: "https://kevinjrojo.github.io/Frases_aletorias/",
      Link2: "https://github.com/kevinjrojo/Frases_aletorias",
    },
    {
      Name: "Encuentra la palabra",
      Description:
        "Juego interactivo para encontrar la palabra oculta. Este proyecto puso a prueba mi logica de programacion,tiene multiples interacciones el cual se van dando a medida que lo juegas.",
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
