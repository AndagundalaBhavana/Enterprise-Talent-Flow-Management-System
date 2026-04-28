import React from "react";
import ProofCard from "./ProofCard";

export default function SkillCard({ skill, proofs, onEdit, onDelete }) {
    const relatedProofs = proofs.filter(p => p.skill.id === skill.id);

    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-lg">{skill.skillName} ({skill.experience} yrs)</h2>
                <div className="flex gap-2">
                    <button onClick={() => onEdit(skill)} className="text-blue-500">Edit</button>
                    <button onClick={() => onDelete(skill.id)} className="text-red-500">Delete</button>
                </div>
            </div>
            <div className="ml-4 mt-2">
                {relatedProofs.map(p => <ProofCard key={p.id} proof={p} />)}
            </div>
        </div>
    );
}