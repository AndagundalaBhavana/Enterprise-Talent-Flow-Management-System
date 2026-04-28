import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Form, Input, Upload, message, Typography } from "antd";
import { PlusOutlined, UploadOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getMyProofs, addProof, updateProof, deleteProof, uploadFile } from "../services/proofService";
import { getMySkills } from "../services/skillService";
import ProofCard from "../components/ProofCard";

const { Title } = Typography;

const SkillProofs = () => {
  const [proofs, setProofs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(null);
  const [form] = Form.useForm();

  // Fetch proofs
  const fetchProofs = async () => {
    try {
      const res = await getMyProofs();
      setProofs(Array.isArray(res) ? res : []);
    } catch (err) { setProofs([]); }
  };

  // Fetch skills for dropdown
  const fetchSkills = async () => {
    try {
      const res = await getMySkills();
      setSkills(Array.isArray(res) ? res : []);
    } catch (err) { setSkills([]); }
  };

  useEffect(() => {
    fetchProofs();
    fetchSkills();
  }, []);

  const handleSubmit = async (values) => {
    try {
      if (currentProof) await updateProof(currentProof.id, values);
      else await addProof(values);
      message.success(currentProof ? "Proof updated!" : "Proof added!");
      setModalVisible(false);
      form.resetFields();
      setCurrentProof(null);
      fetchProofs();
    } catch { message.error("Failed to save proof"); }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProof(id);
      message.success("Proof deleted!");
      fetchProofs();
    } catch { message.error("Failed to delete proof"); }
  };

  const handleUpload = async ({ file, onSuccess, onError }) => {
    try {
      await uploadFile(file);
      message.success("File uploaded!");
      fetchProofs();
      onSuccess(null, file);
    } catch (err) { message.error("Upload failed"); onError(err); }
  };

  return (
    <div style={{ padding: 30, minHeight: "100vh", background: "#f5f7fa" }}>
      <Title level={2} style={{ color: "#eb2f96", textAlign: "center", marginBottom: 20 }}>Skill Proofs</Title>

      <div style={{ marginBottom: 20, textAlign: "right" }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)}>Add Proof</Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
        {proofs.length > 0 ? proofs.map((proof) => (
          <Card
            key={proof.id}
            style={{ width: 300, borderRadius: 12, background: "#fff0f6", padding: 20 }}
            actions={[
              <EditOutlined key="edit" onClick={() => { setCurrentProof(proof); form.setFieldsValue(proof); setModalVisible(true); }} />,
              <DeleteOutlined key="delete" onClick={() => handleDelete(proof.id)} />
            ]}
          >
            <ProofCard proof={proof} />
          </Card>
        )) : <p style={{ fontSize: 16, textAlign: "center", width: "100%" }}>No proofs added yet.</p>}
      </div>

      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />} style={{ marginTop: 20 }}>Upload Proof File</Button>
      </Upload>

      <Modal
        visible={modalVisible}
        title={currentProof ? "Edit Proof" : "Add Proof"}
        onCancel={() => { setModalVisible(false); form.resetFields(); setCurrentProof(null); }}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: "Enter title" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: "Enter description" }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Proof Link" name="proofLink">
            <Input />
          </Form.Item>
          <Form.Item label="Experience Level" name="experienceLevel">
            <Input />
          </Form.Item>
          <Form.Item label="Skill" name="skillId" rules={[{ required: true, message: "Select skill" }]}>
            <select style={{ width: "100%", padding: 8 }}>
              {skills.map((s) => <option key={s.id} value={s.id}>{s.skillName}</option>)}
            </select>
          </Form.Item>
          <Button type="primary" htmlType="submit">{currentProof ? "Update Proof" : "Add Proof"}</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default SkillProofs;