import React, { useEffect, useState } from "react";
import { Card } from "antd";
import API from "../services/api";
import "./Users.css";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/api/users/admin/users");
      setUsers(res.data.data); // 🔥 IMPORTANT (ApiResponse)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h1 className="users-title">👀 All Users</h1>

      <div className="users-grid">
        {users.map((user) => (
          <Card key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>📱 {user.phone}</p>
            <p>🎭 {user.role?.roleName}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;