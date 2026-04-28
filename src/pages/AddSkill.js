import React from "react";
import { Form, Input, Button, message, Card } from "antd";
import { addSkill } from "../services/skillService";
import "./AddSkill.css";

const AddSkill = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await addSkill(values);
      message.success("Skill added successfully 🎉");
      form.resetFields();
    } catch (err) {
      console.error(err);
      message.error("Failed to add skill");
    }
  };

  return (
    <div className="add-skill-page">
      <Card className="add-skill-card">
        <h2>Add New Skill</h2>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          
          <Form.Item
            label="Skill Name"
            name="skillName"
            rules={[{ required: true, message: "Enter skill name" }]}
          >
            <Input placeholder="e.g. Java, React, Spring Boot" />
          </Form.Item>

          <Form.Item
            label="Experience (Years)"
            name="experience"
            rules={[{ required: true, message: "Enter experience" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Add Skill
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddSkill;