import React from "react";

export default function ProofCard({ proof }) {
    return (
        <div className="p-2 bg-gray-100 rounded-md mb-2 flex justify-between items-center">
            <div>
                <h3 className="font-semibold">{proof.title}</h3>
                <p className="text-gray-600">{proof.description}</p>
                {proof.proofLink && <a href={proof.proofLink} target="_blank" className="text-blue-500 underline">View</a>}
            </div>
            <span className="text-gray-700 text-sm">{proof.experienceLevel}</span>
        </div>
    );
}