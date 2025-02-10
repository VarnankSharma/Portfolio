import React from "react";
import Tilt from "react-parallax-tilt";

function SkillCard({ skill }) {
  return (
    <Tilt
      className="tilt-skill"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
    >
      <div className="skill-card">
        <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
        <p>{skill.name}</p>
      </div>
    </Tilt>
  );
}

export default SkillCard;
