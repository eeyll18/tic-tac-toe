import type { SquareValue } from "../types";
import { Square } from "./Square";

interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  jokerSquareIndex: number;
}

export const Board = ({ squares, onClick, jokerSquareIndex }: BoardProps) => {
  return (
    <div>
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
