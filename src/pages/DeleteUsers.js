import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import API from "../services/api";
import "./Users.css";

const DeleteUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/api/users/admin/users");
      setUsers(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/users/admin/${id}`);
      alert("User deleted ✅");
      fetchUsers();
    } catch {
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="users-container">
      <h1 className="users-title">🗑 Delete Users</h1>

      <div className="users-grid">
        {users.map((user) => (
          <Card key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>🎭 {user.role?.roleName}</p>

            <Button danger onClick={() => handleDelete(user.id)}>
              Delete ❌
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeleteUsers;