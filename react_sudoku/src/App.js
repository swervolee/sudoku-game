
import { useState } from "react";
import './App.css';
import createBoard from './components/GenBoard/board';
import Board from "./components/board";
import CheckPuzzleButton from "./components/checkPuzzleButton";

function App() {
	const [puzzle, setPuzzle] = useState([]);
	const [solution, setSolution] = useState([]);

	const generatePuzzle = () => {
		setPuzzle([]);
		setSolution([]);
		const [board, solution] = createBoard();
		if (!board || !solution) {
			console.error("Failed to generate puzzle");
			return;
		}
		setPuzzle(board);
		setSolution(solution);
	};

	return (
		<div className="flex flex-col items-center p-4">
			<button
				onClick={generatePuzzle}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
			>
				Generate Puzzle
			</button>
			<Board puzzle={puzzle} solution={solution} />
			<CheckPuzzleButton puzzle={puzzle} solution={solution} />
		</div>
	);
}

export default App;

