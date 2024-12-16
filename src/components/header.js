import React from "react";

export default function Header({ generatePuzzle }) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold tracking-wide text-center md:text-left">
          Sudoku Master
        </h1>

        <p className="hidden md:block italic text-sm text-gray-300 text-center md:text-left">
          Challenge your mind, solve the grid!
        </p>

        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto"
            onClick={generatePuzzle}
          >
            New Game
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full md:w-auto">
            Check Puzzle
          </button>
        </nav>
      </div>
    </header>
  );
}

