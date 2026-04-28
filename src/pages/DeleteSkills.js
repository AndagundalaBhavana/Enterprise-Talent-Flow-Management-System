
import React, { useEffect, useState } from "react";
import { getMySkills, deleteSkill } from "../services/skillService";
import { Card, Button, Popconfirm, message } from "antd";
import "./DeleteSkills.css";

const DeleteSkills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const res = await getMySkills();
    setSkills(Array.isArray(res) ? res : []);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    await deleteSkill(id);
    message.success("Deleted!");
    fetchSkills();
  };

  return (
    <div className="delete-page">
      <h1>❌ Delete Skills</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <Card key={skill.id} className="skill-card">
            <h3>{skill.skillName}</h3>
            <p>{skill.experience} years</p>

            <Popconfirm
              title="Delete this skill?"
              onConfirm={() => handleDelete(skill.id)}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeleteSkills;