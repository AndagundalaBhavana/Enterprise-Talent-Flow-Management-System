import React, { useState } from "react";

export default function DashboardTabs({ children }) {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="flex gap-4 mb-4">
                {children.map((child, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className={`px-4 py-2 rounded-lg font-semibold ${
                            active === idx ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                        }`}
                    >
                        {child.props.title}
                    </button>
                ))}
            </div>
            <div>{children[active]}</div>
        </div>
    );
}