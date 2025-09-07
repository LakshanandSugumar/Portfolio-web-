import React from 'react';

// Sample skills data
const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'CSS', level: 'Advanced' },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">({skill.level})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;