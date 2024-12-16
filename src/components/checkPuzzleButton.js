
import React, { useState } from "react";

export default function CheckPuzzleButton({ puzzle, solution, setIncorrectCells }) {
  const checkPuzzle = () => {
    const incorrectCells = [];

    puzzle.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell !== solution[rowIndex][colIndex]) {
          incorrectCells.push([rowIndex, colIndex]);
        }
      });
    });

   
    setIncorrectCells(incorrectCells);

    const isCorrect = incorrectCells.length === 0;
    alert(isCorrect ? "You win!" : "Some values are incorrect.");
  };

  return (
    <button onClick={checkPuzzle} className="bg-blue-500 m-2 px-4 py-2 text-white rounded hover:bg-blue-600">
      Check Puzzle
    </button>
  );
}

