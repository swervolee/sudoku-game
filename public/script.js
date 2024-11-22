$(document).ready(function () {
	const boardElement = $("#sudoku-board");
	const generateButton = $("#generate-puzzle");
	let solution = []; // Stores the correct solution for validation

	// Fetch and generate the puzzle
	generateButton.click(function () {
		$.ajax({
			url: "http://localhost:3000/generatePuzzle",
			method: "GET",
			success: function (data) {
				if (!data.puzzle || !data.solution) {
					console.error("Invalid puzzle data received.");
					alert("Failed to generate puzzle. Invalid data.");
					return;
				}
				const { puzzle, solution: correctSolution } = data;
				solution = correctSolution; // Save the solution
				renderBoard(puzzle);
			},
			error: function (err) {
				console.log(err);
				alert("Failed to generate puzzle. Please try again.");
			},
		});
	});

	function renderBoard(board) {
		boardElement.empty();
		boardElement.css("display", "grid");
		boardElement.css("grid-template-columns", "repeat(9, 1fr)");

		board.forEach((row, rowIndex) => {
			row.forEach((cell, colIndex) => {
				const cellDiv = $("<div></div>").addClass("cell");

				if (cell === 0) {
					const input = $("<input>", {
						type: "number",
						max: 9,
						min: 1,
						maxlength: 1,
						placeholder: " ",
						class: "editable-cell",
					});

					// Add input change event for validation
					input.on("input", function () {
						const userValue = parseInt($(this).val()) || 0;
						validateCell(userValue, rowIndex, colIndex, $(this));
					});

					cellDiv.append(input);
				} else {
					const span = $("<span></span>")
						.text(cell)
						.addClass("prefilled-cell");
					cellDiv.append(span);
				}

				boardElement.append(cellDiv);
			});
		});
	}

	function validateCell(value, rowIndex, colIndex, inputElement) {
		if (!solution || solution.length === 0) {
			console.error("Solution not loaded.");
			return;
		}

		if (value === solution[rowIndex][colIndex]) {
			inputElement.css({
				"background-color": "#1DB954", // Green for correct
				color: "#000000", // Black text
			});
		} else if (value === 0) {
			inputElement.css({
				"background-color": "transparent", // Reset
				color: "#000000", // Default
			});
		} else {
			inputElement.css({
				"background-color": "#E74C3C", // Red for incorrect
				color: "#FFFFFF", // White text
			});
		}
	}
});

