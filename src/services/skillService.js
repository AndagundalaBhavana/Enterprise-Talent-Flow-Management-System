import API from "../services/api";


export const getAllSkills = async () => {
  const res = await API.get("/api/Skills/all"); // 🔥 your backend
  return res.data;
};

// GET MY SKILLS
export const getMySkills = async () => {
  const res = await API.get("/api/Skills/my");
  return res.data;   // ✅ VERY IMPORTANT
};

// ADD SKILL
export const addSkill = async (data) => {
  const res = await API.post("/api/Skills", data);
  return res.data;
};

// UPDATE SKILL
export const updateSkill = async (id, data) => {
  const res = await API.put(`/api/Skills/${id}`, data);
  return res.data;
};

// DELETE SKILL
export const deleteSkill = async (id) => {
  const res = await API.delete(`/api/Skills/${id}`);
  return res.data;

};
 

