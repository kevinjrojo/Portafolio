import { useState } from "react";
import "../styles/contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        console.log("Formulario enviado con éxito");
        alert("Email enviado exitosamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error al enviar el formulario");
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
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            className="inputs"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputs"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message-input">Mensaje</label>
          <textarea
            id="message-input"
            name="message"
            className="inputs"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="button">Enviar</button>
        </form>
      </section>
    </article>
  );
};
