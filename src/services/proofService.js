import API from "../services/api";

export const getMyProofs = (page = 0, size = 5) =>
    API.get(`/proofs/my?page=${page}&size=${size}`);
export const addProof = (proof) => API.post("/proofs", proof);
export const updateProof = (id, proof) => API.put(`/proofs/admin/${id}`, proof);
export const deleteProof = (id) => API.delete(`/proofs/${id}`);
export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return API.post("/proofs/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};