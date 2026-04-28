import React from "react";
import { useNavigate } from "react-router-dom";
import "./SkillsDashboard.css";

const SkillsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="skills-dashboard">
      <h1 className="skills-title">Skills Management</h1>

      <div className="skills-cards">

        <div className="skill-card add" onClick={() => navigate("/skills/add")}>
          <h2>➕ Add Skills</h2>
          <p>Add new skills to your profile</p>
        </div>

        <div className="skill-card view" onClick={() => navigate("/skills/view")}>
          <h2>👀 View Skills</h2>
          <p>See all your added skills</p>
        </div>

        <div className="skill-card update" onClick={() => navigate("/skills/update")}>
          <h2>✏️ Update Skills</h2>
          <p>Edit your existing skills</p>
        </div>

        <div className="skill-card delete" onClick={() => navigate("/skills/delete")}>
          <h2>🗑️ Delete Skills</h2>
          <p>Remove unwanted skills</p>
        </div>

      </div>
    </div>
  );
};

export default SkillsDashboard;