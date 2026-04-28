import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/api/users/login", {
        email,
        password
      });

      // ✅ store token
      localStorage.setItem("token", res.data.accessToken);

      alert("Login Success ✅");

      // 🔥 VERY IMPORTANT: ROLE BASED NAVIGATION
      const role = res.data.role;   // 👈 backend must send this

      if (role === "CANDIDATE") {
        navigate("/candidate-dashboard");
      } 
      else if (role === "PROJECT_MANAGER") {
        navigate("/pm-dashboard");
      } 
      else if (role === "ADMIN") {
        navigate("/admin-dashboard");
      } 
      else if(role === "RECRUITER"){
        navigate("/recruiter");

      }
      else {
        navigate("/dashboard"); // fallback
      }

    } catch {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h2 className="title">🔐 Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn update-btn" onClick={login}>
          Login
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;