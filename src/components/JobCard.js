import React from "react";

export default function JobCard({ job, onApply }) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-center">
            <div>
                <h2 className="font-bold text-lg">{job.title}</h2>
                <p className="text-gray-600">{job.company} | {job.location}</p>
                <p className="text-gray-500 mt-1">₹{job.salary}</p>
            </div>
            <button
                onClick={() => onApply(job.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
            >
                Apply
            </button>
        </div>
    );
}