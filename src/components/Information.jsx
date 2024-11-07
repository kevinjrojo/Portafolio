import "../styles/information.css";
import img from "../assets/cactus.jpg";

export const Information = () => {
  return (
    <div className="information-conteiner">
      <img src={img} alt="" className="imagen-autor" />
      <div className="card" />
    </div>
  );
};
