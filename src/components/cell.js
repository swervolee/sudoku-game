import React, { useState } from "react";

export default function Cell({ value, rowIndex, colIndex, solution }) {
    const [userValue, setUserValue] = useState(value);
    const [inputTouched, setInputTouched] = useState(false);

    const isEditable = value === 0;
    const isCorrect = userValue === solution[rowIndex][colIndex];

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setUserValue(newValue);
    };

    const handleBlur = () => {
        setInputTouched(true);
    };

    return (
        <div
            className={`border border-spotifyGray rounded shadow-sm flex items-center justify-center
                ${isEditable
                    ? userValue === 0 || !inputTouched
                        ? "bg-spotifyBlack"
                        : isCorrect
                        ? "bg-pastelGreen"
                        : "bg-pastelRed"
                    : "bg-spotifyGray"
                }
                w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18`}
        >
            {isEditable ? (
                <input
                    type="number"
                    min="1"
                    max="9"
                    value={userValue || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full h-full text-center text-lg sm:text-xl md:text-2xl lg:text-3xl bg-spotifyBlack outline-none
                        ${userValue === 0 || !inputTouched
                            ? "text-neutralGray"
                            : isCorrect
                            ? "text-darkGreen font-bold"
                            : "text-darkRed font-bold"
                        }`}
                />
            ) : (
                <span className="text-neutralGray text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                    {value}
                </span>
            )}
        </div>
    );
}

