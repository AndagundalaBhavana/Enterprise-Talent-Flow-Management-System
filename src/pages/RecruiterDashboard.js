import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterDashboard.css";

function RecruiterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-container">
      <h1 className="title">🧑‍💼 Recruiter Dashboard</h1>

      <div className="card-grid">

        {/* Applications */}
        <div
          className="card apps"
          onClick={() => navigate("/recruiter/applications")}
        >
          <h2>📄 Applications</h2>
          <p>View & manage candidate applications</p>
        </div>

        {/* Skills */}
        <div
          className="card skills"
          onClick={() => navigate("/recruiter/skills")}
        >
          <h2>🧠 Skills</h2>
          <p>View candidate skills</p>
        </div>
        <div
  className="card profile"
  onClick={() => navigate("/profile")}
  style={{
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "12px",
    padding: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "0.3s"
  }}
>
  <h2 style={{ color: "white" }}>👤 Profile</h2>
  <p style={{ color: "white" }}>View / Update your profile</p>
</div>

        {/* Proofs */}
        <div
          className="card proofs"
          onClick={() => navigate("/recruiter/proofs")}
        >
          <h2>📂 Skill Proofs</h2>
          <p>View & search skill proofs</p>
        </div>

      </div>
    </div>
  );
}

export default RecruiterDashboard;