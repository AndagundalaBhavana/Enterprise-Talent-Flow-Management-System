import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { getProfile } from "../services/userService"; // ✅ FIXED
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const data = await getProfile(); // ✅ FIXED
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">👀 My Profile</h1>

      <Card className="profile-card-view">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Role:</b> {user.roleName}</p>
      </Card>
    </div>
  );
};

export default Profile;