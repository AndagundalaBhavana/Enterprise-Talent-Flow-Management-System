import React, { useEffect, useState } from "react";
import { getAllJobs, applyJob } from "../services/jobService";
import { getMyApplications } from "../services/applicationService";
import { message } from "antd";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // ================= FETCH JOBS =================
  const fetchJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(Array.isArray(res) ? res : []);
    } catch (err) {
      console.error(err);
      setJobs([]);
    }
  };

  // ================= FETCH APPLICATIONS =================
  const fetchApplications = async () => {
    try {
      const res = await getMyApplications();

      const apps = Array.isArray(res)
        ? res
        : Array.isArray(res.content)
        ? res.content
        : [];

      // 👉 remove duplicates (important)
      const uniqueJobIds = [
        ...new Set(apps.map((app) => app.job?.id))
      ];

      setAppliedJobs(uniqueJobIds);

    } catch (err) {
      console.error(err);
    }
  };

  // ================= LOAD DATA =================
  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  // ================= APPLY JOB =================
  const handleApply = async (jobId) => {
    try {
      await applyJob(jobId);
      message.success("Applied successfully!");

      // 👉 update UI instantly
      setAppliedJobs((prev) => [...prev, jobId]);

    } catch (err) {
      message.error("Already applied!");
    }
  };

  // ================= UI =================
  return (
    <div className="jobs-page">
      <h1 className="jobs-title">Available Jobs</h1>

      <div className="jobs-grid">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title || "Job Title"}</h3>
              <p>{job.description || "No description"}</p>

              <button
                className="apply-btn"
                onClick={() => handleApply(job.id)}
                disabled={appliedJobs.includes(job.id)}
              >
                {appliedJobs.includes(job.id)
                  ? "Applied ✅"
                  : "Apply"}
              </button>
            </div>
          ))
        ) : (
          <p className="no-data">No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;