import createBoard from "./GenBoard/board"
import Cell from "./cell";

export default function Board({puzzle, solution}) {
	return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gap: "2px",
      }}
    >
      {puzzle.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            rowIndex={rowIndex}
            colIndex={colIndex}
            solution={solution}
          />
        ))
      )}
    </div>
  );
}
