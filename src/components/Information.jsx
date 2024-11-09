import "../styles/information.css";
import img from "../assets/cactus.jpg";
import { Element } from "react-scroll";
import { InformationMovil } from "./InformationMovil.jsx";

export const Information = () => {
  return (
    <div className="information-conteiner">
      <Element name="targetSection" className="target-section">
        <img src={img} alt="" className="imagen-autor" />
        <div className="Card">
          <p className="heading">Popular this month</p>
          <p>Powered By</p>
          <p>Uiverse</p>
        </div>

        <InformationMovil />
      </Element>
    </div>
  );
};
