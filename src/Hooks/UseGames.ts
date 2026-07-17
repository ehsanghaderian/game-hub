import { useEffect, useState } from "react";
import type { Game } from "../Services/GameService";
import GameService from "../Services/GameService";
import { CanceledError } from "axios";

export const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = GameService.GetAll<Game>();

    setIsLoading(true);

    request
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return cancel;
  }, []);

  return { games, error, isLoading, setGames, setError };
};
