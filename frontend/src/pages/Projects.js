import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ projects }) => {
  console.log("Projects Prop in Projects Component:", projects);

  return (
    <div className="projects-section" id="projects">
      <h2 className="">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
