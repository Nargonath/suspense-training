import { useSuspenseGetAnimes } from "./api";

export function AnimesList() {
  const { data } = useSuspenseGetAnimes();
  console.log(data);

  return (
    <ul>
      {data.data.map((anime) => (
        <li key={anime.id}>{anime.attributes.slug}</li>
      ))}
    </ul>
  );
}
