import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Card, Button, Modal, Form, Input, message } from "antd";
import "./UpdateJobs.css";

const UpdateJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const [form] = Form.useForm();

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

  // OPEN EDIT
  const handleEdit = (job) => {
    setCurrentJob(job);
    form.setFieldsValue(job);
    setIsModalVisible(true);
  };

  // UPDATE JOB
  const handleUpdate = async (values) => {
    try {
      await API.put(`/jobs/${currentJob.id}`, values);

      message.success("Job updated ✨");

      setIsModalVisible(false);
      setCurrentJob(null);
      form.resetFields();

      fetchJobs();
    } catch {
      message.error("Update failed ❌");
    }
  };

  return (
    <div className="update-jobs-page">
      <h1 className="title">✏️ Update Jobs</h1>

      <div className="jobs-grid">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Card key={job.id} className="job-card">

              <h2>{job.title}</h2>
              <p>{job.description}</p>

              <p>🏢 {job.company}</p>
              <p>📍 {job.location}</p>
              <p>💰 ₹{job.salary}</p>

              <Button type="primary" onClick={() => handleEdit(job)}>
                ✏️ Update
              </Button>

            </Card>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>

      {/* MODAL */}
      <Modal
        open={isModalVisible}
        title="Update Job"
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <Input />
          </Form.Item>

          <Form.Item name="location" label="Location">
            <Input />
          </Form.Item>

          <Form.Item name="salary" label="Salary">
            <Input type="number" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Update Job 🚀
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateJobs;
