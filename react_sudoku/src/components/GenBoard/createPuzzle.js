function createPuzzle(board) {
    const levels = { easy: 35, medium: 45, hard: 55 };
    const difficulty = levels.medium;
    let cellsToRemove = difficulty;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }
}

export default createPuzzle