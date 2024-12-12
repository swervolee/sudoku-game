import createPuzzle from "./createPuzzle";
import fillBoard from "./fillBoard";

function createBoard() {
    const board = Array(9).fill().map(() => Array(9).fill(0));
    fillBoard(board);

    
    const solution = board.map(row => [...row]);


    createPuzzle(board);

    return { "puzzle": board, "solution": solution };
}

export default createBoard