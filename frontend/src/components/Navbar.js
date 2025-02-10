import React from "react";
import "../App.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <h1>Varnank Sharma</h1>
      <ul className="nav-links">
        <li><button onClick={() => scrollToSection("home")}>Home</button></li>
        <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
        <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
        <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
