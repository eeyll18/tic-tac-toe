interface GameStatusProps {
  status: string;
  onReset: () => void;
}

export const GameStatus = ({ status, onReset }: GameStatusProps) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {status}
      </h2>
      <button
        onClick={onReset}
        className="
                  px-6 py-2 bg-purple-600 text-white font-bold rounded-lg
                  hover:bg-purple-700 transition-colors duration-200
                  shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75
                "
      >
        Yeniden Başlat
      </button>
    </div>
  );
};
