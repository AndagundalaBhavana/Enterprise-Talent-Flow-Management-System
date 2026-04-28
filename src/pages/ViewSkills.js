import React, { useEffect, useState } from "react";
import { getMySkills } from "../services/skillService";
import { Card, Input, Tag } from "antd";
import { CodeOutlined, SearchOutlined } from "@ant-design/icons";
import "./ViewSkills.css";

const ViewSkills = () => {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");

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
      setSkills([]);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // FILTER
  const filteredSkills = skills.filter((s) =>
    s.skillName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="view-skills-page">
      <h1 className="title">🚀 My Skills</h1>

      {/* SEARCH */}
      <div className="search-box">
        <Input
          placeholder="Search skills..."
          prefix={<SearchOutlined />}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="skills-grid">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <Card key={skill.id} className="skill-card">
              <div className="icon">
                <CodeOutlined />
              </div>

              <h2>{skill.skillName}</h2>

              <Tag color="blue">
                {skill.experience} yrs experience
              </Tag>
            </Card>
          ))
        ) : (
          <p className="no-data">No skills found 😢</p>
        )}
      </div>
    </div>
  );
};

export default ViewSkills;