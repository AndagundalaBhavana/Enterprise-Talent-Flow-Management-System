import React, { useEffect, useState } from "react";
import { getMySkills, updateSkill } from "../services/skillService";
import { Card, Button, Modal, Form, Input, message } from "antd";
import "./UpdateSkills.css";

const UpdateSkills = () => {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();

  const fetchSkills = async () => {
    const res = await getMySkills();
    setSkills(Array.isArray(res) ? res : []);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openEdit = (skill) => {
    setCurrentSkill(skill);
    form.setFieldsValue(skill);
    setVisible(true);
  };

  const handleUpdate = async (values) => {
    await updateSkill(currentSkill.id, values);
    message.success("Updated!");
    setVisible(false);
    fetchSkills();
  };

  return (
    <div className="update-page">
      <h1>✏️ Update Skills</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <Card key={skill.id} className="skill-card">
            <h3>{skill.skillName}</h3>
            <p>{skill.experience} years</p>

            <Button type="primary" onClick={() => openEdit(skill)}>
              Update
            </Button>
          </Card>
        ))}
      </div>

      <Modal open={visible} footer={null} onCancel={() => setVisible(false)}>
        <Form form={form} onFinish={handleUpdate} layout="vertical">
          <Form.Item name="skillName" label="Skill">
            <Input />
          </Form.Item>
          <Form.Item name="experience" label="Experience">
            <Input type="number" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Update Skill
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateSkills;