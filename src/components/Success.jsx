import { FcOk } from "react-icons/fc";
import "../styles/contact.css";
import PropTypes from "prop-types";

export const Success = ({ onReset }) => {
  return (
    <article className="success">
      <FcOk className="icon-success" />
      <strong>Menseje enviando</strong>
      <button onClick={onReset}>Enviar nuevo mensaje</button>
    </article>
  );
};
Success.propTypes = {
  onReset: PropTypes.func.isRequired,
};
