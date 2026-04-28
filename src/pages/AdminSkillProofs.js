import React, { useEffect, useState } from "react";
import { getAllProofs, searchProofs } from "../services/SkillProofService";
import "./AdminSkillProofs.css";

const AdminSkillProofs = () => {
  const [proofs, setProofs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProofs = async () => {
    try {
      const data = await getAllProofs(page);
      setProofs(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchProofs(keyword, page);
      setProofs(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProofs();
  }, [page]);

  return (
    <div className="proofs-container">
      <h1 className="proofs-title">📂 All Skill Proofs</h1>

      {/* 🔍 SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search proofs..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* 📦 CARDS */}
      {proofs.length === 0 ? (
        <p className="no-data">No proofs found 🚫</p>
      ) : (
        <div className="proofs-grid">
          {proofs.map((p) => (
            <div key={p.id} className="proof-card">
              <h2>{p.title}</h2>

              <p>{p.description}</p>

              <p><b>Skill:</b> {p.skillName}</p>

              <p className="email">👤 {p.userEmail}</p>

              <a href={p.proofLink} target="_blank" rel="noreferrer">
                🔗 View Proof
              </a>
            </div>
          ))}
        </div>
      )}

      {/* 🔢 PAGINATION */}
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          ⬅ Prev
        </button>

        <span>Page {page + 1}</span>

        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default AdminSkillProofs;