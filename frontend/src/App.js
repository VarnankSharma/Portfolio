import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css";
import image1 from "./assets/BeFit.png"
const projectsData = [
  {
    title: "Textract - Handwritten Text Recognition",
    description: "A text recognition system using TensorFlow and CNNs with 95% accuracy.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/VarnankSharma/Textract",
  },
  {
    title: "Tic Tac Toe with Minimax Algorithm",
    description: "AI-powered Tic Tac Toe game with unbeatable Minimax algorithm.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5vvReI18GIecC0TOHetaatXeKbX78H9htQ&s",
    link: "https://github.com/VarnankSharma/tic-tac",
  },
  {
    title: "Task Manager",
    description: "Full-stack task management system with JWT authentication and analytics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFX6Mq3PwW26eNRuH_g4DK88ldwjdABEs_w&s",
    link: "https://github.com/VarnankSharma/TaskManagerApp",
  },
  {
    title: "Be Fit Gym Website",
    description: "A responsive React.js website for a gym with EmailJS integration.",
    image: image1,
    link: "https://varnanksharma.github.io/BfitGym/",
  },
];

const skillsData = [
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
  { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/6454/6454035.png" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
  { name: "C", icon: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png" },
  { name: "C++", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
  { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/128/16781/16781152.png" },
  { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/128/16781/16781152.png" },
  { name: "NodeJS", icon: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png" },
];

function App() {
  return (
    <div className="home">
      <Navbar />
      <section id="home"><Home /></section>
      <div>
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
