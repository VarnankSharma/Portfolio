import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-kohl-theta-91.vercel.app/send", { // Fixed API Endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.success || data.error);
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        <div className="contact-info">
          <h2>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
          <p>GET IN TOUCH 💬</p>
          <h3>CONTACT</h3>
          <p><a href="mailto:varnanksharma1@gmail.com">varnanksharma1@gmail.com</a></p>
          <h3>SOCIAL MEDIA</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/varnank-sharma" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:varnanksharma1@gmail.com">
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h3>CONTACT FORM</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">SEND</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
