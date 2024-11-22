#!/usr/bin/node

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static('public')); // To serve the HTML, CSS, and JS files

app.get("/generatePuzzle", (req, res) => {
    const board = createBoard();
    res.json(board);
});

function createBoard() {
    const board = Array(9).fill().map(() => Array(9).fill(0));
    fillBoard(board);

    // Create a deep copy of the solved board for the solution
    const solution = board.map(row => [...row]);

    // Now, create the puzzle by removing some numbers
    createPuzzle(board);

    return { "puzzle": board, "solution": solution };
}

function fillBoard(board) {
    // Try to fill the board using a backtracking algorithm
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
                shuffle(numbers); // Randomize numbers to avoid bias

                for (let num of numbers) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (fillBoard(board)) {
                            return true;
                        }
                        board[row][col] = 0; // Backtrack
                    }
                }
                return false; // No valid number found, need to backtrack
            }
        }
    }
    return true; // All cells are filled correctly
}

function isValid(board, row, col, num) {
    // Check row and column
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === num) {
                return false;
            }
        }
    }

    return true;
}

function createPuzzle(board) {
    const levels = { easy: 35, medium: 45, hard: 55 };
    const difficulty = levels.medium; // You can change this for different levels
    let cellsToRemove = difficulty;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col] !== 0) {
            board[row][col] = 0; // Remove a number to create the puzzle
            cellsToRemove--;
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

app.listen(port, "0.0.0.0", () => {
    console.log(`Sudoku server listening at http://localhost:${port}`);
});

