import React, { useEffect, useState } from "react";
import { getAllSkills } from "../services/skillService";
import "./AdminSkills.css";

const AdminSkills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const data = await getAllSkills();
      setSkills(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">🧠 All Candidate Skills</h1>

      {skills.length === 0 ? (
        <p className="no-data">No skills found 🚫</p>
      ) : (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              
              <h2>{skill.skillName}</h2>

              <p>
                <b>Experience:</b> {skill.experience} years
              </p>

              <p className="email">
                👤 {skill.user?.email || "Unknown"}
              </p>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSkills;