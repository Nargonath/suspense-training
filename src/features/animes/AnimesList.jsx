import { useSuspenseGetAnimes } from "./api";

export function AnimesList() {
  useSuspenseGetAnimes();

  return (
    <ul>
      <li>should display data</li>
    </ul>
  );
}
