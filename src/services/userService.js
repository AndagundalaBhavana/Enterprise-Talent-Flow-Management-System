import API from "./api"; // ✅ SAME as your other services

// GET PROFILE
export const getProfile = async () => {
  const res = await API.get("/api/users/profile");
  return res.data;
};

// UPDATE PROFILE
export const updateProfile = async (data) => {
  const res = await API.put("/api/users/user/update", data);
  return res.data;
};