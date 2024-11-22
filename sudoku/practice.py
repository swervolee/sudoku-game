#!/usr/bin/python3

import random
import tkinter as tk

def create_board():
    board = [[0 for _ in range(9)] for _ in range(9)]
    fill_board(board)
    return board

def fill_board(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                numbers = list(range(1, 10))
                random.shuffle(numbers)

                for num in numbers:
                    if is_valid(board, row, col, num):
                        board[row][col] = num
                        if fill_board(board):
                            return True
                        board[row][col] = 0
                return False
    return True

def is_valid(board, row, col, num):
    # Check row and column for duplicates
    for i in range(9):
        if board[row][i] == num or board[i][col] == num:
            return False

    # Check 3x3 grid for duplicates
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    for r in range(start_row, start_row + 3):
        for c in range(start_col, start_col + 3):
            if board[r][c] == num:  # Corrected here
                return False
    return True

def create_puzzle(board, difficulty="medium"):
    levels = {'easy': 35, 'medium': 45, 'hard': 55}
    cells_to_remove = levels.get(difficulty, 45)
    
    for _ in range(cells_to_remove):
        row, col = random.randint(0, 8), random.randint(0, 8)
        while board[row][col] == 0:
            row, col = random.randint(0, 8), random.randint(0, 8)
        board[row][col] = 0




def display_board(board):
    # Initialize the tkinter root window
    root = tk.Tk()
    root.title("Sudoku Board")
    root.configure(bg="white")

    # Define cell background color and cell size
    cell_color = "#FFA500"  # Orange color
    cell_size = 100  # Size for both filled and empty cells

    # Adjust the grid layout to ensure equal width/height for each cell
    for i in range(9):
        root.grid_columnconfigure(i, weight=1, uniform="equal")
        root.grid_rowconfigure(i, weight=1, uniform="equal")

    def on_cell_change(event, row, col):
        # Limit input to 1-9 numbers
        text = event.widget.get()
        if text.isdigit() and 1 <= int(text) <= 9:
            board[row][col] = int(text)
        else:
            event.widget.delete(0, tk.END)  # Clear invalid input

    # Create a grid of labels for the board
    for i in range(9):
        for j in range(9):
            # Create a frame for each cell, with padding and borders for 3x3 grids
            frame = tk.Frame(
                root,
                width=cell_size,
                height=cell_size,
                highlightbackground="black",
                highlightthickness=3 if (i % 3 == 0 and i != 0) or (j % 3 == 0 and j != 0) else 1,
                bg="white"  # Background for frame
            )
            frame.grid(row=i, column=j, padx=1, pady=1, sticky="nsew")

            # Display each cell's number or leave it empty if 0
            value = board[i][j]
            if value == 0:
                # If the value is 0, create an Entry widget (editable cell)
                entry = tk.Entry(
                    frame,
                    font=("Helvetica", 36, "bold"),
                    justify="center",
                    bg=cell_color,
                    fg="black",
                    width=3
                )
                entry.insert(0, "")  # Set empty cell
                entry.bind("<FocusOut>", lambda event, row=i, col=j: on_cell_change(event, row, col))
                entry.grid(row=0, column=0, sticky="nsew")
            else:
                # If the value is not 0, display a Label
                label = tk.Label(
                    frame,
                    text=str(value),
                    font=("Helvetica", 36, "bold"),
                    bg=cell_color,
                    fg="black"
                )
                label.pack(expand=True, fill="both")

    root.mainloop()










# Generate a complete board
board = create_board()
create_puzzle(board)
print("Generated Full Board:")
display_board(board)

