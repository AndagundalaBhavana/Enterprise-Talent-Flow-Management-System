import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, message, Card, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { addProof, uploadFile } from "../services/SkillProofService";
import { getMySkills } from "../services/skillService";
import "./AddProof.css";

const { Option } = Select;

const AddProof = () => {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState([]);
  const [file, setFile] = useState(null);

  // FETCH SKILLS
  const fetchSkills = async () => {
    try {
      const res = await getMySkills();
      const data = Array.isArray(res)
        ? res
        : Array.isArray(res.content)
        ? res.content
        : [];

      setSkills(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // HANDLE FILE SELECT
  const handleFileChange = (info) => {
    setFile(info.file.originFileObj);
  };

  // SUBMIT
  const handleSubmit = async (values) => {
    try {
      let fileLink = values.proofLink;

      // STEP 1: upload file if selected
      if (file) {
        const res = await uploadFile(file);
        fileLink = res.data; // backend returns "File uploaded:filename"
      }

      // STEP 2: send proof data
      const finalData = {
        ...values,
        proofLink: fileLink,
      };

      await addProof(finalData);

      message.success("Proof added with file 🎉");
      form.resetFields();
      setFile(null);

    } catch (err) {
      console.error(err);
      message.error("Failed to add proof ❌");
    }
  };

  return (
    <div className="add-proof-page">
      <Card className="proof-card">
        <h1>📁 Add Skill Proof</h1>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>

          {/* SKILL */}
          <Form.Item name="skillId" label="Select Skill" rules={[{ required: true }]}>
            <Select placeholder="Choose skill">
              {skills.map((skill) => (
                <Option key={skill.id} value={skill.id}>
                  {skill.skillName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* TITLE */}
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          {/* DESC */}
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>

          {/* LINK (optional now) */}
          <Form.Item name="proofLink" label="Proof Link (optional)">
            <Input placeholder="Or upload file below" />
          </Form.Item>

          {/* FILE UPLOAD */}
          <Form.Item label="Upload File">
            <Upload beforeUpload={() => false} onChange={handleFileChange}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>

          {/* EXPERIENCE */}
          <Form.Item name="experienceLevel" label="Experience">
            <Select>
              <Option value="Beginner">Beginner</Option>
              <Option value="Intermediate">Intermediate</Option>
              <Option value="Expert">Expert</Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Add Proof
          </Button>

        </Form>
      </Card>
    </div>
  );
};

export default AddProof;