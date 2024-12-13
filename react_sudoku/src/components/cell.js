import React, { useState } from "react";


export default function Cell({ value, rowIndex, colIndex, solution}) {
	const [userValue, setUserValue] = useState(value);
	const isEditable = value === 0;

	const handleChange = (e) => {
		const newValue = parseInt(e.target.value, 10) || 0;
		setUserValue(newValue);
	}

	const isCorrect = userValue === solution[rowIndex][colIndex]
	return (
		<div
		style={{
			padding: "10px",
				border: "1px solid black",
				backgroundColor: isEditable
				? isCorrect
				? "#1DB954"
				: userValue === 0
				? "white"
				: "#E74C3C"
				: "#F4F4F4",
				color: isEditable ? "black" : "gray",
		}}
		>
		{isEditable ? (
			<input
			type="number"
			min="1"
			max="9"
			value={userValue || ""}
			onChange={handleChange}
			style={{ width: "100%", textAlign: "center" }}
			/>
		) : (
			<span>{value}</span>
		)}
		</div>
	);
}
