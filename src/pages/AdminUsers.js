import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminUsers() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="title">👤 Users Management</h1>

      <div className="dashboard-grid">

        <div
          className="dashboard-card users"
          onClick={() => navigate("/admin/users/view")}
        >
          <h2>👀 View Users</h2>
          <p>See all registered users</p>
        </div>

        <div
          className="dashboard-card delete"
          onClick={() => navigate("/admin/users/delete")}
        >
          <h2>🗑 Delete Users</h2>
          <p>Remove users from system</p>
        </div>

      </div>
    </div>
  );
}

export default AdminUsers;