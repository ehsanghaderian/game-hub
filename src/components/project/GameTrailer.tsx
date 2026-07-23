import { Spinner } from "@chakra-ui/react";
import { UseTrailers } from "../../Hooks/UseTrailers";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = UseTrailers(gameId);
  if (isLoading) return <Spinner></Spinner>;

  if (error) return null;
  const first = data?.results[0];
  if (!first) return null;

  if (first.data?.[480])
    return (
      <video
        width={"100%"}
        src={first.data?.[480]}
        poster={first.preview}
        controls
      ></video>
    );

  return null;
};
