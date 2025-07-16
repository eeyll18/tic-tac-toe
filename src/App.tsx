import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {
  const { board, status, jokerSquareIndex, handleSquareClick, resetGame } =
    useTicTacToe();

  return (
    <main className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Tic-Tac-Toe
        </h1>
        <p className="text-gray-400 mb-8">
          Joker kareyi ele geçir ve avantajı kap!
        </p>

        <Board
          squares={board}
          onClick={handleSquareClick}
          jokerSquareIndex={jokerSquareIndex}
        />

        <GameStatus status={status} onReset={resetGame} />
      </div>
    </main>
  );
}

export default App;
