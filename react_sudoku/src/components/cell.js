
import React, { useState } from "react";

export default function Cell({ value, rowIndex, colIndex, solution }) {
    const [userValue, setUserValue] = useState("");
    const isEditable = value === 0;

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setUserValue(newValue);
    };

    const isCorrect = userValue === solution[rowIndex][colIndex];

   
    return (
        <div
            className={`w-12 h-12 flex items-center justify-center rounded border border-black {
                isEditable ? "text-white" : "text-gray-700"
            }`}
        >
            {isEditable ? (
                <input
                    type="number"
                    min="1"
                    max="9"
                    value={userValue || ""}
                    onChange={handleChange}
                    className="w-full h-full text-center outline-none rounded bg-spotifyGreen"                />
            ) : (
                <span className="text-white">{value}</span>
            )}
        </div>
    );
}

