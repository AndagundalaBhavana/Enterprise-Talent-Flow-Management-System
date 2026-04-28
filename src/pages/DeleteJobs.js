import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Card, Button, Popconfirm, message } from "antd";
import "./DeleteJobs.css";

const DeleteJobs = () => {
  const [jobs, setJobs] = useState([]);

  // FETCH JOBS
  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // DELETE JOB
  const handleDelete = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);

      message.success("Job deleted successfully 🗑️");

      // 🔥 instant UI update (no reload)
      setJobs((prev) => prev.filter((job) => job.id !== id));

    } catch (err) {
      console.error(err);
      message.error("Delete failed ❌");
    }
  };

  return (
    <div className="delete-jobs-page">
      <h1 className="title">🗑️ Delete Jobs</h1>

      <div className="jobs-grid">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Card key={job.id} className="job-card">

              <h2>{job.title}</h2>
              <p>{job.description}</p>

              <p>🏢 {job.company}</p>
              <p>📍 {job.location}</p>
              <p>💰 ₹{job.salary}</p>

              <Popconfirm
                title="Are you sure to delete this job?"
                onConfirm={() => handleDelete(job.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>
                  🗑️ Delete
                </Button>
              </Popconfirm>

            </Card>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default DeleteJobs;