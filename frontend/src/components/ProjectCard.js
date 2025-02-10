import React from "react";

const ProjectCard = ({ project }) => {
  console.log("Rendering ProjectCard for:", project);

  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="pro-img"
        
      />
      <h3 >{project.title}</h3>
      <p >{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
