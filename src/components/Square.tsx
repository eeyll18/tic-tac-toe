import type { SquareValue } from "../types";

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isRevealedJoker: boolean;
}

export const Square = ({ value, onClick, isRevealedJoker }: SquareProps) => {
  const textStyle = value === "X" ? "text-blue-500" : "text-red-500";
  const glowEffect = isRevealedJoker
    ? "ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-900"
    : "";
  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24 md:w-32 md:h-32 bg-gray-800 rounded-lg 
        flex items-center justify-center 
        font-bold text-5xl md:text-6xl text-white 
        transition-all duration-300 ease-in-out
        hover:bg-gray-700
        ${glowEffect} 
      `}
    >
      {value && <span className={textStyle}>{value}</span>}
    </button>
  );
};
