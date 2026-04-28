import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { getApplications } from "../services/applicationService";
import "./RecruiterApplications.css" ;

const ViewApplications = () => {
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

  return (
    <div className="page-container" style={{ padding: "30px" }}>
      <h1 className="page-title">👀 All Applications</h1>

      {applications.length === 0 ? (
        <p>No applications found 🚫</p>
      ) : (
        applications.map((app) => (
          <Card key={app.id} style={{ marginBottom: "15px" }}>
            <p><b>User:</b> {app.user?.email}</p>

            <p>
              <b>Status:</b>{" "}
              <span
                style={{
                  color:
                    app.status === "APPROVED"
                      ? "green"
                      : app.status === "REJECTED"
                      ? "red"
                      : "orange"
                }}
              >
                {app.status}
              </span>
            </p>
          </Card>
        ))
      )}
    </div>
  );
};

export default ViewApplications;