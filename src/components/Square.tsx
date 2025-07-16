import JokerIcon from "../assets/joker.svg";
import type { SquareValue } from "../types";

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isJoker: boolean;
  isWinnerSquare?: boolean;
}

export const Square = ({
  value,
  onClick,
  isJoker,
  isWinnerSquare,
}: SquareProps) => {
  const textStyle = value === "X" ? "text-blue-500" : "text-red-500";
  const jokerStyle = !value && isJoker ? "opacity-50" : "";

  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24 md:w-32 md:h-32 bg-gray-800 rounded-lg 
        flex items-center justify-center 
        font-bold text-5xl md:text-6xl text-white 
        transition-all duration-200 ease-in-out
        hover:bg-gray-700
        ${isWinnerSquare ? "bg-green-500" : ""}
      `}
    >
      {value ? (
        <span className={textStyle}>{value}</span>
      ) : isJoker ? (
        <img
          src={JokerIcon}
          alt="joker"
          className={`w-10 h-10 text-yellow-400 ${jokerStyle}`}
        />
      ) : null}
    </button>
  );
};
