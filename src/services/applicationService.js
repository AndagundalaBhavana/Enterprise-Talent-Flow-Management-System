import API from "./api";



export const getApplications = async () => {
  const res = await API.get("/applications/all");
  return res.data;
};




  // ✅ GET applications by jobId
export const getApplicationsByJob = async (jobId) => {
  const res = await API.get(`/applications/job/${jobId}`);
  return res.data;
};
// ✅ UPDATE application status
export const updateApplicationStatus = async (id, status) => {
  const res = await API.put(`/applications/${id}/status?status=${status}`);
  return res.data;
};


export const getMyApplications = () => API.get("/applications/my");
export const cancelApplication = async (applicationId) => {
  const res = await API.delete(`/api/applications/${applicationId}`);
  return res.data;



}