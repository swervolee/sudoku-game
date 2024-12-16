import React from "react";

export default function Header({generatePuzzle}) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Sudoku Master
        </h1>

        <p className="hidden md:block italic text-sm text-gray-300">
          Challenge your mind, solve the grid!
        </p>

        <nav className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={generatePuzzle} >
            New Game
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Check Puzzle
          </button>
        </nav>
      </div>
    </header>
  );
}

