import React, { useEffect, useState } from "react";
import { getMyProofs, updateProof } from "../services/SkillProofService";
import { Card, Button, Modal, Form, Input, Select, message } from "antd";
import "./UpdateProof.css";

const { Option } = Select;

const UpdateProof = () => {
  const [proofs, setProofs] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(null);

  const [form] = Form.useForm();

  // FETCH
  const fetchProofs = async () => {
    try {
      const res = await getMyProofs(0, 50); // get all
      setProofs(res.content || []);
    } catch (err) {
      console.error(err);
      setProofs([]);
    }
  };

  useEffect(() => {
    fetchProofs();
  }, []);

  // OPEN MODAL
  const openEdit = (proof) => {
    setCurrentProof(proof);
    form.setFieldsValue(proof);
    setVisible(true);
  };

  // UPDATE
  const handleUpdate = async (values) => {
    try {
      await updateProof(currentProof.id, values);
      message.success("Updated successfully ✨");
      setVisible(false);
      fetchProofs();
    } catch (err) {
      console.error(err);
      message.error("Update failed ❌");
    }
  };

  return (
    <div className="update-proof-page">
      <h1>✏️ Update Proofs</h1>

      <div className="proof-grid">
        {proofs.map((proof) => (
          <Card key={proof.id} className="proof-card">
            <h2>{proof.title}</h2>
            <p>{proof.description}</p>

            <Button type="primary" onClick={() => openEdit(proof)}>
              Update
            </Button>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      <Modal
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>

          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="proofLink" label="Proof Link">
            <Input />
          </Form.Item>

          <Form.Item name="experienceLevel" label="Experience">
            <Select>
              <Option value="Beginner">Beginner</Option>
              <Option value="Intermediate">Intermediate</Option>
              <Option value="Expert">Expert</Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Update Proof
          </Button>

        </Form>
      </Modal>
    </div>
  );
};

export default UpdateProof;