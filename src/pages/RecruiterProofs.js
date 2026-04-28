import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./RecruiterProofs.css";

const RecruiterProofs = () => {
  const [proofs, setProofs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);

  // 🔥 Fetch all proofs (pagination)
  const fetchProofs = async () => {
    try {
      const res = await API.get(`/proofs/all?page=${page}&size=6`);
      setProofs(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔍 Search proofs
  const searchProofs = async () => {
    try {
      const res = await API.get(
        `/proofs/search?keyword=${keyword}&page=0&size=6`
      );
      setProofs(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProofs();
  }, [page]);

  return (
    <div className="proofs-container">
      <h1 className="title">📂 Skill Proofs</h1>

      {/* 🔍 Search Bar */}
      <div className="search-box">
        <input
          placeholder="Search by title / skill..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={searchProofs}>Search</button>
      </div>

      {/* 🧾 Cards */}
      <div className="proofs-grid">
        {proofs.length === 0 ? (
          <p>No proofs found 🚫</p>
        ) : (
          proofs.map((p) => (
            <div className="proof-card" key={p.id}>
              <h3>{p.title}</h3>
              <p><b>Skill:</b> {p.skillName}</p>
              <p><b>User:</b> {p.userEmail}</p>
              <p><b>Level:</b> {p.experienceLevel}</p>

              <a href={p.proofLink} target="_blank" rel="noreferrer">
                🔗 View Proof
              </a>
            </div>
          ))
        )}
      </div>

      {/* 🔁 Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          ⬅ Prev
        </button>

        <span>Page {page + 1}</span>

        <button onClick={() => setPage(page + 1)}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default RecruiterProofs;