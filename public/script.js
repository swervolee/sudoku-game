document.addEventListener("DOMContentLoaded", function () {
	const boardElement = document.getElementById("sudoku-board");
	const generateButton = document.getElementById("generate-puzzle");

	// Create Check Puzzle button
	const checkPuzzleButton = document.createElement("button");
	checkPuzzleButton.innerText = "Check Puzzle";
	checkPuzzleButton.id = "check-puzzle";

	let solution = []; // Store the correct solution here

	// Fetch and generate the puzzle
	generateButton.addEventListener("click", function () {
		fetch("http://localhost:3000/generatePuzzle")
			.then(response => response.json())
			.then(data => {
				if (!data.puzzle || !data.solution) {
					console.error("Invalid puzzle data received.");
					alert("Failed to generate puzzle. Invalid data.");
					return;
				}

				const { puzzle, solution: correctSolution } = data;
				solution = correctSolution; // Save the solution
				console.log(solution);

				// Ensure Check Puzzle button is appended only once
				if (!document.getElementById("check-puzzle")) {
					document.querySelector(".container").appendChild(checkPuzzleButton);
				}

				renderBoard(puzzle);
			})
			.catch(err => {
				console.error("Error fetching puzzle:", err);
				alert("Failed to generate puzzle. Please try again.");
			});
	});

	// Render the Sudoku board
	function renderBoard(board) {
		boardElement.innerHTML = ""; // Clear the board
		boardElement.style.display = "grid";
		boardElement.style.gridTemplateColumns = "repeat(9, 1fr)";

		board.forEach((row, rowIndex) => {
			row.forEach((cell, colIndex) => {
				const cellDiv = document.createElement("div");
				cellDiv.classList.add("cell");

				// Add thick borders for 3×3 grids
				if (rowIndex % 3 === 0 && rowIndex !== 0)
					cellDiv.classList.add("thick-border-top");
				if (colIndex % 3 === 0 && colIndex !== 0)
					cellDiv.classList.add("thick-border-left");

				const isGrid1 = Math.floor(rowIndex / 3) % 2 === Math.floor(colIndex / 3) % 2;
				cellDiv.classList.add(isGrid1 ? "grid-background-1" : "grid-background-2");


				if (cell === 0) {
					const input = document.createElement("input");
					input.type = "number";
					input.max = "9";
					input.min = "1";
					input.placeholder = " ";
					input.classList.add("editable-cell");


					input.addEventListener('click', () => {
						const elements = boardElement.querySelectorAll('.editable-cell');
						elements.forEach((el) => {
							el.style.backgroundColor = "";
						});
					});

					cellDiv.appendChild(input);
				} else {
					const span = document.createElement("span");
					span.textContent = cell;
					span.classList.add("prefilled-cell");
					cellDiv.appendChild(span);
				}

				boardElement.appendChild(cellDiv);
			});
		});
	}

	// Check Puzzle button click event
	checkPuzzleButton.addEventListener("click", function (event) {
		event.preventDefault();
		if (!solution.length) {
			alert("Generate a puzzle first.");
			return;
		}

		let isCorrect = true;
		const cells = boardElement.querySelectorAll(".editable-cell");

		cells.forEach((input, index) => {
			const rowIndex = Math.floor(index / 9);
			const colIndex = index % 9;
			const userValue = parseInt(input.value) || 0;


			if (userValue !== solution[rowIndex][colIndex]) {
				isCorrect = false;
				input.style.backgroundColor = "#E74C3C";
				input.style.color = "#CCC";
			} else {
				input.classList.add('green-colored');
				input.style.backgroundColor = "#1DB954";
				input.style.color = "#CCC";
			}
		});

		alert(isCorrect ? "Congratulations! The puzzle is correct!" : "Some values are incorrect.");
	});

	// Validate individual cell
	function validateCell(value, rowIndex, colIndex, inputElement) {
		if (!solution || solution.length === 0) {
			console.error("Solution not loaded.");
			return;
		}

		if (value === solution[rowIndex][colIndex]) {
			inputElement.style.backgroundColor = "#1DB954"; 
			inputElement.style.color = "#000000";
		} else if (value === 0) {
			inputElement.style.backgroundColor = "transparent";
			inputElement.style.color = "#000000";
		} else {
			inputElement.style.backgroundColor = "#E74C3C"; 
			inputElement.style.color = "#FFFFFF";
		}
	}
});
