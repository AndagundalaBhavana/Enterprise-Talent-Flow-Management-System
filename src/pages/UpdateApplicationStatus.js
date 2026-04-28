import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { getApplications, updateApplicationStatus } from "../services/applicationService";
import "./RecruiterApplications.css";

const UpdateApplicationStatus = () => {
  const [applications, setApplications] = useState([]);

  const fetchApps = async () => {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleUpdate = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);
      alert(`Updated to ${status} ✅`);
      fetchApps();
    } catch {
      alert("Update failed ❌");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">✏️ Update Application Status</h1>

      {applications.length === 0 ? (
        <p>No applications found 🚫</p>
      ) : (
        applications.map((app) => (
          <Card key={app.id} style={{ marginBottom: "15px" }}>
            <p><b>User:</b> {app.user?.email}</p>

            <p>
              <b>Status:</b>{" "}
              <span
                className={
                  app.status === "APPROVED"
                    ? "status-approved"
                    : app.status === "REJECTED"
                    ? "status-rejected"
                    : "status-applied"
                }
              >
                {app.status}
              </span>
            </p>

            <div className="btn-group">
              <Button
                className="btn-approve"
                onClick={() => handleUpdate(app.id, "APPROVED")}
              >
                ✅ Approve
              </Button>

              <Button
                className="btn-reject"
                style={{ marginLeft: "10px" }}
                onClick={() => handleUpdate(app.id, "REJECTED")}
              >
                ❌ Reject
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default UpdateApplicationStatus;