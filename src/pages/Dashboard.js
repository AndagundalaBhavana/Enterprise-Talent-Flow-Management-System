import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  // 🔐 Check token + fetch profile
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first ❌");
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, []);

  // 📡 Fetch profile
  const fetchProfile = async () => {
    try {
      const res = await API.get("/api/users/profile");
      setProfile(res.data);
    } catch (err) {
      alert("Failed to load profile ❌");
    }
  };

  // 🔥 ROLE-BASED REDIRECTION (VERY IMPORTANT)
  useEffect(() => {
    if (profile) {
      if (profile.roleName === "ADMIN") {
        navigate("/admin-dashboard");
      } 
      else if (profile.roleName === "RECRUITER") {
        navigate("/recruiter");
      } 
      else if (profile.roleName === "CANDIDATE") {
        navigate("/candidate-dashboard");
      } 
      else if (profile.roleName === "PROJECT_MANAGER") {
        navigate("/pm-dashboard");
      }
      // USER will stay here ✅
    }
  }, [profile]);

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h2 className="title">✨ Welcome Back</h2>

        {profile ? (
          <div className="profile-box">

            <div className="profile-row">
              <span>Name</span>
              <span>{profile.name || "N/A"}</span>
            </div>

            <div className="profile-row">
              <span>Email</span>
              <span>{profile.email}</span>
            </div>

            <div className="profile-row">
              <span>Phone</span>
              <span>{profile.phone || "N/A"}</span>
            </div>

            <div className="profile-row">
              <span>Role</span>
              <span className="role-badge">{profile.roleName}</span>
            </div>

          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Loading profile...</p>
        )}

        <div className="button-group">
          <button
            className="btn update-btn"
            onClick={() => navigate("/edit-profile")}
          >
            ✏️ Update Profile
          </button>

          <button
            className="btn logout-btn"
            onClick={logout}
          >
            🚪 Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;