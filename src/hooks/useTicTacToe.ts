import { useMemo, useState } from "react";
import type { GamePhase, Player, SquareValue } from "../types";
import { calculateWinner } from "../utils/gameLogic";

const initialBoard = () => Array(9).fill(null);
const getRandomJokerIndex = () => Math.floor(Math.random() * 9);

export const useTicTacToe = () => {
  const [board, setBoard] = useState<SquareValue[]>(initialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [jokerSquareIndex, setJokerSquareIndex] = useState<number>(
    getRandomJokerIndex()
  );
  const [gamePhase, setGamePhase] = useState<GamePhase>("PLAYING");

  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(
    () => board.every((square) => square !== null) && !winner, // board is full
    [board, winner]
  );

  const handleSquareClick = (index: number) => {
    if (winner || isDraw) return;

    // joker hamle
    if (gamePhase === "AWAITING_MOVE") {
      const opponent: Player = currentPlayer === "X" ? "O" : "X";
      if (board[index] === opponent) {
        const newBoard = [...board];
        newBoard[index] = currentPlayer; // kendisi ile değiştir
        setBoard(newBoard);
        setGamePhase("PLAYING");
        setCurrentPlayer(opponent); // sıra değişir
      }
      return;
    }

    if (board[index]) return;

    // normal hamle
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (index === jokerSquareIndex) {
      setGamePhase("AWAITING_MOVE");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setCurrentPlayer("X");
    setJokerSquareIndex(getRandomJokerIndex());
    setGamePhase("PLAYING");
  };

  const status: string = useMemo(() => {
    if (winner) return `Kazanan: ${winner}`;
    if (isDraw) return "Oyun berabere!";
    if (gamePhase === "AWAITING_MOVE") {
      return `Oyuncu ${currentPlayer}: Rakibin bir karesini ele geçir!`;
    }
    return `Sıradaki oyuncu: ${currentPlayer}`;
  }, [winner, isDraw, gamePhase, currentPlayer]);

  return {
    board,
    currentPlayer,
    gamePhase,
    jokerSquareIndex,
    handleSquareClick,
    resetGame,
    status,
    winner,
    isDraw,
  };
};
