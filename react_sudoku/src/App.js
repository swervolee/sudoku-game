import { useState } from "react";
import './App.css';
import createBoard from './components/GenBoard/board';
import Board from "./components/board"

function App() {
	const [puzzle, setPuzzle] = useState([])
	const [Solution, setSolution] = useState([]);
	
	const generatePuzzle = () => {
		const [board, solution] = createBoard();
		setPuzzle(board);
		setSolution(solution);
	}

	return (
		<div>
			<button onClick={generatePuzzle}>Generate Puzzle</button>
			<Board puzzle={puzzle} solution={Solution} />
		</div>
	);
}

export default App;

