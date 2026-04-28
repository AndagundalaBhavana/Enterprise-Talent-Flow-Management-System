import React, { useEffect, useState } from "react";
import {
  getMySkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../services/skillService";
import { message } from "antd";
import "./MySkillls.css";

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState("");

  // ================= FETCH =================
  const fetchSkills = async () => {
    try {
      const res = await getMySkills();
      setSkills(Array.isArray(res) ? res : []);
    } catch (err) {
      console.error(err);
      setSkills([]);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // ================= ADD / UPDATE =================
  const handleSubmit = async () => {
    if (!skillName || !experience) {
      message.warning("Fill all fields");
      return;
    }

    try {
      const data = {
        skillName,
        experience: Number(experience),
      };

      if (editingSkill) {
        await updateSkill(editingSkill.id, data);
        message.success("Skill updated!");
      } else {
        await addSkill(data);
        message.success("Skill added!");
      }

      resetForm();
      fetchSkills();
    } catch (err) {
      console.error(err);
      message.error("Operation failed");
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      message.success("Deleted!");
      fetchSkills();
    } catch {
      message.error("Delete failed");
    }
  };

  // ================= EDIT =================
  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setSkillName(skill.skillName);
    setExperience(skill.experience);
    setShowModal(true);
  };

  // ================= RESET =================
  const resetForm = () => {
    setShowModal(false);
    setEditingSkill(null);
    setSkillName("");
    setExperience("");
  };

  // ================= UI =================
  return (
    <div className="skills-page">
      <h1 className="skills-title">My Skills</h1>

      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Add Skill
      </button>

      <div className="skills-grid">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <h3>{skill.skillName}</h3>
              <p>{skill.experience} years experience</p>

              <div className="card-actions">
                <button onClick={() => handleEdit(skill)}>Edit</button>
                <button onClick={() => handleDelete(skill.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No skills added</p>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingSkill ? "Edit Skill" : "Add Skill"}</h2>

            <input
              type="text"
              placeholder="Skill Name"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Experience (years)"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={handleSubmit}>
                {editingSkill ? "Update" : "Add"}
              </button>
              <button onClick={resetForm}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySkills;