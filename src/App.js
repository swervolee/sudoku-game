
import { useState } from "react";
import './App.css';
import createBoard from './components/GenBoard/board';
import Board from "./components/board";
import CheckPuzzleButton from "./components/checkPuzzleButton";
import Header from "./components/header";

function App() {
	const [puzzle, setPuzzle] = useState([]);
	const [solution, setSolution] = useState([]);
	const [incorrectCells, setIncorrectCells] = useState([]);

	const generatePuzzle = () => {
		setPuzzle([]);
		setSolution([]);
		setIncorrectCells([]);
		const [board, solution] = createBoard();
		if (!board || !solution) {
			console.error("Failed to generate puzzle");
			return;
		}
		setPuzzle(board);
		setSolution(solution);
	};

	return (
		<>
			<Header generatePuzzle={generatePuzzle} />
			<div className="container flex flex-col items-center p-4">
				<Board puzzle={puzzle} solution={solution} incorrectCells={incorrectCells} />
				{puzzle.length > 0 ? (
					<CheckPuzzleButton puzzle={puzzle} solution={solution} setIncorrectCells={setIncorrectCells} />
				) : (
					""
				)}
			</div>
		</>
	);
}

export default App;

