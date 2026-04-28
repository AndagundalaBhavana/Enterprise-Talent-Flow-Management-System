import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./RecruiterSkills.css";

const RecruiterSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.get("/api/Skills/all")
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">🧠 Candidate Skills</h1>

      <div className="skills-grid">
        {skills.length === 0 ? (
          <p>No skills found 🚫</p>
        ) : (
          skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <h2>✨ {skill.skillName}</h2>

              <p>
                <b>👤 User:</b> {skill.user?.email || "N/A"}
              </p>

              <p>
                <b>⭐ Experience:</b> {skill.experience} years
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecruiterSkills;