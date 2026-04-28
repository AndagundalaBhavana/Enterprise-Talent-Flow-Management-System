import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1 className="admin-title">🛠️ Admin Dashboard</h1>

      <div className="admin-grid">

        {/* Applications */}
        <div
          className="admin-card apps"
          onClick={() => navigate("/admin/applications")}
        >
          <h2>📄 Applications</h2>
          <p>Manage all job applications</p>
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
        

        {/* Jobs */}
        <div
          className="admin-card jobs"
          onClick={() => navigate("/admin/jobs")}
        >
          <h2>💼 Jobs</h2>
          <p>Manage job postings</p>
        </div>

        {/* Skills */}
        <div
          className="admin-card skills"
          onClick={() => navigate("/admin/skills")}
        >
          <h2>🧠 Skills</h2>
          <p>View all candidate skills</p>
        </div>

        {/* Skill Proofs */}
        <div
          className="admin-card proofs"
          onClick={() => navigate("/admin/proofs")}
        >
          <h2>📂 Skill Proofs</h2>
          <p>Verify candidate proofs</p>
        </div>

        {/* Users */}
        <div
          className="admin-card users"
          onClick={() => navigate("/admin/users")}
        >
          <h2>👥 Users</h2>
          <p>Manage platform users</p>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;