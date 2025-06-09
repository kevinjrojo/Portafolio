import { useState } from "react";
import "../styles/contact.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { Success } from "./Success";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.email)
      return setError("completa todos campos marcados");
    try {
      const res = await fetch("https://formspree.io/f/xgvkgoze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  const handleReset = () => {
    setSuccess(false);
    setError("");
  };
  return (
    <article className="contact" id="contact-me">
      {success ? (
        <Success onReset={handleReset} />
      ) : (
        <section className="contact-form">
          <h2>Contáctame</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">
              <label className="input-contact">
                <FaUser />*
              </label>
              <input
                type="text"
                name="name"
                className="inputs"
                value={formData.name}
                onChange={handleChange}
                placeholder="Kevin Rojo"
              />
            </label>
            <label>
              <label className="input-contact">
                <MdEmail />*
              </label>
              <input
                type="email"
                name="email"
                className="inputs"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@gmail.com"
              />
            </label>

            <label htmlFor="menssage">
              <label className="input-contact">
                <IoIosText />*
              </label>
              <input
                placeholder="Escribí tu mensaje..."
                name="message"
                className="inputs"
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="button">
              Enviar
            </button>
            {error && <p style={{ color: "var(--color-text)" }}>{error}</p>}
          </form>
        </section>
      )}
      <section className="icon-container">
        <FaInstagram className="icon-contact" />
        <FaGithub className="icon-contact" />
        <FaLinkedin className="icon-contact" />
        <FaWhatsapp className="icon-contact" />
        <TbFileCv className="icon-contact" />
      </section>
    </article>
  );
};
