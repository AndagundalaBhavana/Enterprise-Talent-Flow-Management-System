import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Card } from "antd";
import "./ViewJobs.css";

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");

      console.log("JOBS 👉", res.data);

      setJobs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="view-jobs-page">
      <h1 className="jobs-title">📋 All Jobs</h1>

      <div className="jobs-grid">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Card key={job.id} className="job-card">

              <h2>{job.title}</h2>

              <p className="desc">
                {job.description || "No description"}
              </p>

              <div className="job-info">
                <p>🏢 {job.company}</p>
                <p>📍 {job.location}</p>
                <p>💰 ₹{job.salary}</p>
              </div>

            </Card>
          ))
        ) : (
          <p className="no-data">No jobs found 😢</p>
        )}
      </div>
    </div>
  );
};

export default ViewJobs;