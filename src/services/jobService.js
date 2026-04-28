import API from "../services/api";

export const getAllJobs = async () => {
    const res = await API.get("/jobs");
    return res.data;
};

export const applyJob = async (jobId) => {
    const res = await API.post(`/applications/${jobId}`);
    return res.data;
};

// ✅ Add this
export const getJobById = async (jobId) => {
    const res = await API.get(`/jobs/${jobId}`);
    return res.data;
};


export const createJob = async (data) => {
  const res = await API.post("/jobs", data);
  return res.data;
};

export const getJobs = async () => {
  const res = await API.get("/jobs/all");
  return res.data;
};

export const updateJob = async (id, data) => {
  const res = await API.put(`/jobs/${id}`, data);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await API.delete(`/jobs/${id}`);
  return res.data;
};

