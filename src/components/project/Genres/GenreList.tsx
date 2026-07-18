import { UseGenres } from "../../../Hooks/UseGenres";

export const GenreList = () => {
  const { data: genres } = UseGenres();

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};
