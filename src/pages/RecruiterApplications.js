import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterDashboard.css";

function RecruiterApplications() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-container">
      <h1 className="title">📄 Applications</h1>

      <div className="card-grid">

        <div
          className="card apps"
          onClick={() => navigate("/recruiter/applications/view")}
        >
          <h2>👀 View Applications</h2>
          <p>See all candidates applied</p>
        </div>

        <div
          className="card proofs"
          onClick={() => navigate("/recruiter/applications/update")}
        >
          <h2>✏️ Update Status</h2>
          <p>Approve / Reject candidates</p>
        </div>

      </div>
    </div>
  );
}

export default RecruiterApplications;