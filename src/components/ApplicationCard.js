import React from "react";

export default function ApplicationCard({ application }) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-center">
            <div>
                <h2 className="font-bold text-lg">{application.job.title}</h2>
                <p className="text-gray-600">{application.job.company} | {application.job.location}</p>
                <p className="text-gray-500 mt-1">Applied on: {new Date(application.appliedAt).toLocaleDateString()}</p>
            </div>
            <span className={`px-3 py-1 rounded-full font-semibold ${
                application.status === "APPLIED" ? "bg-yellow-200 text-yellow-800" :
                application.status === "REJECTED" ? "bg-red-200 text-red-800" :
                "bg-green-200 text-green-800"
            }`}>
                {application.status}
            </span>
        </div>
    );
}