import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectManagerDashboard.css";

const ProjectManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="pm-dashboard">
      <h1 className="pm-title">👨‍💼 Project Manager Dashboard</h1>

      <div className="pm-grid">

        <div className="pm-card post" onClick={() => navigate("/pm/jobs/add")}>
          <h2>➕ Post Job</h2>
          <p>Create new job openings</p>
        </div>

        <div className="pm-card view" onClick={() => navigate("/pm/jobs/view")}>
          <h2>📋 View Jobs</h2>
          <p>See all posted jobs</p>
        </div>

        <div className="pm-card update" onClick={() => navigate("/pm/jobs/update")}>
          <h2>✏️ Update Jobs</h2>
          <p>Edit existing jobs</p>
        </div>

        <div className="pm-card delete" onClick={() => navigate("/pm/jobs/delete")}>
          <h2>🗑️ Delete Jobs</h2>
          <p>Remove jobs</p>
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

      </div>
    </div>
  );
};

export default ProjectManagerDashboard;