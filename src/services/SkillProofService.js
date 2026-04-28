import API from "../services/api";
export const getAllProofs = async (page = 0, size = 5) => {
  const res = await API.get(`/proofs/all?page=${page}&size=${size}`);
  return res.data;
};

// 🔥 SEARCH
export const searchProofs = async (keyword, page = 0, size = 5) => {
  const res = await API.get(
    `/proofs/search?keyword=${keyword}&page=${page}&size=${size}`
  );
  return res.data;
};



// ADD PROOF
export const addProof = (data) => API.post("/proofs", data);

// GET MY PROOFS
export const getMyProofs = (page = 0, size = 5) =>
  API.get(`/proofs/my?page=${page}&size=${size}`).then(res => res.data);

// DELETE
export const deleteProof = (id) => API.delete(`/proofs/${id}`);

//uodate 
export const updateProof = (id, data) =>
  API.put(`/proofs/${id}`, data);

//upload
export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/proofs/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};