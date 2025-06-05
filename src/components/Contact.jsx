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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      }
      if (!formData.name || !formData.message || !formData.email) {
        setError("completa los campos marcados");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <article className="contact" id="contact-me">
      <section className="contact-form">
        <h2>Contáctame</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="Name">
            <FaUser className="contact-icon" />

            <input
              type="text"
              name="name"
              id="name"
              className="inputs"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>
          <label htmlFor="Email">
            <MdEmail className="contact-icon" />
            <input
              type="email"
              name="email"
              id="email"
              className="inputs"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>
          <label htmlFor="menssage">
            <IoIosText className="contact-icon" />
            <input
              placeholder="message"
              id="message-input"
              name="message"
              className="inputs"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="button">
            Enviar
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
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
