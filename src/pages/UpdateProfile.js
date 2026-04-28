import React, { useEffect, useState } from "react";
import { Card, Input, Button } from "antd";
import { getProfile, updateProfile } from "../services/userService"; // ✅ FIXED
import "./Profile.css";

const UpdateProfile = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const fetchProfile = async () => {
    try {
      const data = await getProfile(); // ✅ FIXED
      setForm({
        name: data.name || "",
        phone: data.phone || "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfile(form); // ✅ FIXED
      alert("Profile updated successfully ✅");
    } catch {
      alert("Update failed ❌");
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">✏️ Update Profile</h1>

      <Card className="profile-card-view">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: "10px" }}
        />

        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ marginBottom: "10px" }}
        />

        <Button type="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Card>
    </div>
  );
};

export default UpdateProfile;