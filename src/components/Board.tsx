import type { SquareValue } from "../types";
import { Square } from "./Square";

interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  jokerSquareIndex: number;
}

export const Board = ({ squares, onClick, jokerSquareIndex }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-gray-900 rounded-xl shadow-lg">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isJoker={i === jokerSquareIndex}
        />
      ))}
    </div>
  );
};
