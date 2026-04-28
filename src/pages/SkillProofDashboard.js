import React from "react";
import { useNavigate } from "react-router-dom";
import "./SkillProofDashboard.css";

const SkillProofDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="proof-dashboard">
      <h1 className="title">📁 Skill Proofs</h1>

      <div className="proof-grid">

        <div className="proof-card add" onClick={() => navigate("/proofs/add")}>
          <h2>➕ Add Proof</h2>
          <p>Add proof for your skills</p>
        </div>

        <div className="proof-card view" onClick={() => navigate("/proofs/view")}>
          <h2>👀 View Proofs</h2>
          <p>See all your proofs</p>
        </div>

        <div className="proof-card update" onClick={() => navigate("/proofs/update")}>
          <h2>✏️ Update Proof</h2>
          <p>Edit your proof details</p>
        </div>

        <div className="proof-card delete" onClick={() => navigate("/proofs/delete")}>
          <h2>❌ Delete Proof</h2>
          <p>Remove unwanted proofs</p>
        </div>

      </div>
    </div>
  );
};

export default SkillProofDashboard;