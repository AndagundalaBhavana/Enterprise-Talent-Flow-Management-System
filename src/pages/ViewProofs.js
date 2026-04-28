
import React, { useEffect, useState } from "react";
import { getMyProofs } from "../services/SkillProofService";
import { Card, Tag, Pagination } from "antd";
import "./ViewProofs.css";

const ViewProofs = () => {
  const [proofs, setProofs] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchProofs = async (pageNo = 0) => {
    try {
      const res = await getMyProofs(pageNo, 5);

      console.log("PROOFS 👉", res);

      setProofs(res.content || []);
      setTotal(res.totalElements || 0);

    } catch (err) {
      console.error(err);
      setProofs([]);
    }
  };

  useEffect(() => {
    fetchProofs(page);
  }, [page]);

  return (
    <div className="view-proofs-page">
      <h1 className="proofs-title">📁 My Skill Proofs</h1>

      <div className="proofs-grid">
        {proofs.length > 0 ? (
          proofs.map((proof) => (
            <Card key={proof.id} className="proof-card">

              <h2>{proof.title}</h2>

              <p className="desc">
                {proof.description || "No description provided"}
              </p>

              <div className="tags">
                <Tag color="blue">{proof.skillName}</Tag>
                <Tag color="green">{proof.experienceLevel}</Tag>
              </div>

            </Card>
          ))
        ) : (
          <p className="no-data">No proofs found 😢</p>
        )}
      </div>

      {/* PAGINATION */}
      <Pagination
        current={page + 1}
        total={total}
        pageSize={5}
        onChange={(p) => setPage(p - 1)}
        style={{ textAlign: "center", marginTop: "30px" }}
      />
    </div>
  );
};

export default ViewProofs;