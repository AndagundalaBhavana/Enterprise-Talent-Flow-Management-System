import { useNavigate } from "react-router-dom";
import "./RecruiterDashboard.css"; // reuse same CSS for colorful cards

function AdminJobs() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-container">
      <h1 className="title">💼 Admin Jobs</h1>

      <div className="card-grid">

        <div
          className="card apps"
          onClick={() => navigate("/admin/jobs/create")}
        >
          <h2>➕ Create Job</h2>
          <p>Add a new job posting</p>
        </div>

        <div
          className="card proofs"
          onClick={() => navigate("/admin/jobs/view")}
        >
          <h2>👀 View Jobs</h2>
          <p>See all jobs</p>
        </div>

        <div
          className="card skills"
          onClick={() => navigate("/admin/jobs/update")}
        >
          <h2>✏️ Update Job</h2>
          <p>Edit job details</p>
        </div>

        <div
          className="card users"
          onClick={() => navigate("/admin/jobs/delete")}
        >
          <h2>🗑 Delete Job</h2>
          <p>Remove a job posting</p>
        </div>

      </div>
    </div>
  );
}

export default AdminJobs;