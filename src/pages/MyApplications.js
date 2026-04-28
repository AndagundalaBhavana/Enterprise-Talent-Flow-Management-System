import React, { useEffect, useState } from "react";
import { getMyApplications } from "../services/applicationService";
import "./MyApplications.css";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

const fetchApplications = async () => {
  try {
    const res = await getMyApplications();

    console.log("FULL RESPONSE 👉", JSON.stringify(res, null, 2));

setApplications(
  Array.isArray(res)
    ? res
    : Array.isArray(res.content)
    ? res.content
    : Array.isArray(res.data)
    ? res.data
    : Array.isArray(res.data?.content)
    ? res.data.content
    : []
);
  } catch (err) {
    console.error(err);
    setApplications([]);
  }
};

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="applications-page">
      <h1 className="applications-title">My Applications</h1>

      <div className="applications-grid">
        {applications.length > 0 ? (
          applications.map((app) => (
            <div className="application-card" key={app.id}>
             <h3>{app.job?.title || "Job Title"}</h3>
              <p>Status: {app.status || "Applied"}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No applications found</p>
        )}
      </div>
    </div>
  );
};

export default MyApplications;