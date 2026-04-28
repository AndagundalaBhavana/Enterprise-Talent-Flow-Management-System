import React, { useEffect, useState } from "react";
import { getMyProofs, deleteProof } from "../services/SkillProofService";
import { Card, Button, Popconfirm, message } from "antd";
import "./DeleteProof.css";

const DeleteProof = () => {
  const [proofs, setProofs] = useState([]);

  // FETCH PROOFS
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

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteProof(id);
      message.success("Proof deleted successfully 🗑️");
      fetchProofs(); // refresh list
    } catch (err) {
      console.error(err);
      message.error("Delete failed ❌");
    }
  };

  return (
    <div className="delete-proof-page">
      <h1>❌ Delete Skill Proofs</h1>

      <div className="proof-grid">
        {proofs.length > 0 ? (
          proofs.map((proof) => (
            <Card key={proof.id} className="proof-card">
              <h2>{proof.title}</h2>
              <p>{proof.description}</p>

              <Popconfirm
                title="Are you sure to delete?"
                onConfirm={() => handleDelete(proof.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Delete</Button>
              </Popconfirm>
            </Card>
          ))
        ) : (
          <p className="no-data">No proofs found</p>
        )}
      </div>
    </div>
  );
};

export default DeleteProof;