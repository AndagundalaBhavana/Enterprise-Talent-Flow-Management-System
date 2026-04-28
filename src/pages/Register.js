import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    roleName: "USER"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await API.post("/api/users/register", form);

      alert("Registration Successful ✅");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed ❌");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h2 className="title">📝 Register</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
          />
        </div>

        {/* 🔥 UPDATED ROLE SECTION */}
        <div className="form-group">
          <label>Role</label>
          <select
            name="roleName"
            value={form.roleName}
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="RECRUITER">Recruiter</option>
            <option value="ADMIN">Admin</option>
            <option value="CANDIDATE">Candidate</option>
            <option value="PROJECT_MANAGER">Project Manager</option>
          </select>
        </div>

        <button className="btn update-btn" onClick={register}>
          Register
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;