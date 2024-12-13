export default checkPuzzleButton({puzzle, solution}) {
	const checkPuzzle = () => {
		let isCorrect = true;

		puzzle.forEach((row, rowIndex) => {
			row.forEach((cell, colIndex) => {
				if (cell == 0) return;
				if (cell !== solution[rowIndex][colIndex]) {
					isCorrect = false;
				}
			});
		});

		alert(isCorect ? "You win" : "some values are incorrect");

		return <button onclick={checkPuzzle}>Check Puzzle</button>;
	}
});
