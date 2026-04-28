import React, { useState } from "react";
import { Button, Input } from "antd";
import { createJob } from "../services/jobService";
import "./RecruiterDashboard.css";

const CreateJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createJob(job);
      alert("Job created ✅");
      setJob({ title: "", description: "", company: "", location: "", salary: "" });
    } catch (err) {
      alert("Failed ❌");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">➕ Create Job</h1>
      <Input placeholder="Title" name="title" value={job.title} onChange={handleChange} />
      <Input placeholder="Description" name="description" value={job.description} onChange={handleChange} />
      <Input placeholder="Company" name="company" value={job.company} onChange={handleChange} />
      <Input placeholder="Location" name="location" value={job.location} onChange={handleChange} />
      <Input placeholder="Salary" name="salary" value={job.salary} onChange={handleChange} />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: "10px" }}>Create</Button>
    </div>
  );
};

export default CreateJob;