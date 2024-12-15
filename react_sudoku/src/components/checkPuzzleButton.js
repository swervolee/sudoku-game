
import React from "react";

export default function CheckPuzzleButton({ puzzle, solution }) {


	const checkPuzzle = () => {
		console.log(puzzle);
		console.log(solution);
		let isCorrect = true;

		puzzle.forEach((row, rowIndex) => {
			row.forEach((cell, colIndex) => {
				if (cell !== solution[rowIndex][colIndex]) {
					isCorrect = false;
				}
			});
		});

		alert(isCorrect ? "You win!" : "Some values are incorrect.");
	};

	return (
		<button onClick={checkPuzzle} className="bg-blue-500 m-2 px-4 py-2 text-white rounded hover:bg-blue-600">
		Check Puzzle
		</button>
	);
}

