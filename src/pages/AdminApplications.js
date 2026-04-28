import { useNavigate } from "react-router-dom";
import "./RecruiterDashboard.css";

function AdminApplications() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-container">
      <h1 className="title">📄 Admin Applications</h1>

      <div className="card-grid">

        <div
          className="card apps"
          onClick={() => navigate("/admin/applications/view")}
        >
          <h2>👀 View All Applications</h2>
          <p>See all candidates</p>
        </div>

        <div
          className="card proofs"
          onClick={() => navigate("/admin/applications/update")}
        >
          <h2>✏️ Update Status</h2>
          <p>Approve / Reject candidates</p>
        </div>

      </div>
    </div>
  );
}

export default AdminApplications;