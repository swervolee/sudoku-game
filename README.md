# Sudoku App

A fun and interactive Sudoku app designed to let users generate, play, and validate Sudoku puzzles. This project is built with a simple yet functional design and includes both frontend and backend implementations.

## Features

- **Generate Random Puzzles**: Users can generate new Sudoku puzzles.
- **Interactive Gameplay**: Fill in cells to complete the puzzle.
- **Validation**: Check if the entered solution is correct.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

```
── package.json
├── package-lock.json
├── public
│   ├── index.html         # Main HTML file for the app
│   ├── script.js          # Contains frontend JavaScript logic
│   └── styles.css         # CSS file for styling the app
├── README.md              # Project documentation
└── server.js              # Backend server implementation
```

## Technologies Used

### Frontend
- **HTML**: Markup for structuring the app.
- **CSS**: Styling for a user-friendly interface.
- **JavaScript**: Core logic for the game.

### Backend
- **Node.js**: Backend server for handling requests.
- **Express.js**: Web framework for creating the server.

### Package Management
- **npm**: Dependency and package management.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/swervolee/sudoku-app.git
   cd sudoku-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

4. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.

## How to Play

1. Click "Generate Puzzle" to load a new Sudoku grid.
2. Fill in the blank cells with numbers 1-9.
3. Click "Check Solution" to validate your answers.
4. Errors will be highlighted, and a success message appears if the puzzle is correct.

## Future Enhancements

- Add difficulty levels (Easy, Medium, Hard).
- Implement user accounts and puzzle saving.
- Include a timer for tracking completion time.
- Add mobile app support.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy solving Sudoku puzzles and have fun!
