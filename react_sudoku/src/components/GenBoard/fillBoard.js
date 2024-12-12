import shuffle from "./shuffle";
import isValid from "./isValid";

function fillBoard(board) {
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
                shuffle(numbers);

                for (let num of numbers) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (fillBoard(board)) {
                            return true;
                        }
                        board[row][col] = 0; 
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export default fillBoard