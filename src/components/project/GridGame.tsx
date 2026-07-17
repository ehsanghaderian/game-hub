import { UseGames } from "../../Hooks/UseGames";

export const GridGame = () => {
  const { games, error, isLoading, setGames, setError } = UseGames();

  return (
    <>
      {isLoading && (
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      )}
      {error && <p className="text-red-400">error happened</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
