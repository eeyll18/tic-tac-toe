import { useState } from "react";
import type { GamePhase, Player, SquareValue } from "../types";

const initialBoard = () => Array(9).fill(null);
const getRandomJokerIndex = () => Math.floor(Math.random() * 9);

export const useTicTacToe = () => {
  const [board, setBoard] = useState<SquareValue[]>(initialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [jokerSquareIndex, setJokerSquareIndex] = useState<number>(
    getRandomJokerIndex()
  );
  const [gamePhase, setGamePhase] = useState<GamePhase>("PLAYING");
};
