import React from "react";
import SkillCard from "../components/SkillCard";

function Skills({ skills }) {
  return (
    <div className="skills-section" id="skills">
      <h2>SKILLS</h2>
      <p>The skills, tools, and technologies I use:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
