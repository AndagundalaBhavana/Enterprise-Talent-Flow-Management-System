import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: ""
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/api/users/profile");

      setForm({
        name: res.data.name || "",
        phone: res.data.phone || ""
      });
    } catch (err) {
      alert("Failed to load ❌");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    try {
      await API.put("/api/users/user/update", form);
      alert("Updated ✅");
      navigate("/dashboard");
    } catch {
      alert("Failed ❌");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h2 className="title">✏️ Edit Profile</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="button-group space-top">
          <button className="btn save-btn" onClick={updateProfile}>
            💾 Save
          </button>

          <button
            className="btn back-btn"
            onClick={() => navigate("/dashboard")}
          >
            🔙 Back
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditProfile;