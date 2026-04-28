import React from "react";
import { useNavigate } from "react-router-dom";
import "./CandidateDashboard.css";

function CandidateDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      
      {/* TITLE */}
      <h1 className="dashboard-title">Candidate Dashboard</h1>

      {/* CARDS */}
      <div className="cards-container">

        {/* JOBS */}
        <div
          className="dashboard-card jobs"
          onClick={() => navigate("/jobs")}
        >
          <h2>💼 Jobs</h2>
          <p>Explore and apply to available jobs</p>
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

        {/* APPLICATIONS */}
        <div
          className="dashboard-card applications"
          onClick={() => navigate("/applications")}
        >
          <h2>📄 Applications</h2>
          <p>View jobs you applied for</p>
        </div>

        {/* SKILLS */}
        <div
          className="dashboard-card skills"
          onClick={() => navigate("/skills")}
        >
          <h2>🛠️ Skills</h2>
          <p>Add, update and manage skills</p>
        </div>

        {/* PROOFS */}
        <div
          className="dashboard-card proofs"
          onClick={() => navigate("/proofs")}
        >
          <h2>📁 Skill Proofs</h2>
          <p>Upload and manage certificates</p>
        </div>

      </div>
    </div>
  );
}

export default CandidateDashboard;