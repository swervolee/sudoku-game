import logo from './logo.svg';
import './App.css';
import createBoard from './components/GenBoard/board';

function App() {
  const [puzzle,  solution] = createBoard();
  console.log(puzzle, solution);
  return (
    <div>Hello</div>
  );
}

export default App;