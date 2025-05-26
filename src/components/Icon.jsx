import "../styles/icon.css";
import { SiCss3 } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
export const Icon = () => {
  return (
    <main className="icono">
      <SiJavascript className="iconos infinite1" />
      <SiHtml5 className="iconos infinite2" />
      <SiCss3 className="iconos infinite3" />
      <SiReact className="iconos infinite4" />
      <SiBootstrap className="iconos infinite5" />
      <SiNodedotjs className="iconos infinite6" />
      <SiSass className="iconos infinite7" />
      <SiGithub className="iconos infinite8" />
    </main>
  );
};
