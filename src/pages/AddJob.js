import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import API from "../services/api";
import "./AddJob.css";

const AddJob = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/jobs", form);

      message.success("Job posted successfully 🚀");

      // reset form
      setForm({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: ""
      });

      // optional redirect
      // navigate("/pm-dashboard");

    } catch (err) {
      console.error(err);
      message.error("Failed to post job ❌");
    }
  };

  return (
    <div className="add-job-page">
      <div className="add-job-card">

        <h1>➕ Post New Job</h1>

        <input
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="salary"
          type="number"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          🚀 Post Job
        </button>

      </div>
    </div>
  );
};

export default AddJob;