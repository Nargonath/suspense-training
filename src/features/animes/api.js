import { useSuspenseQuery } from "@tanstack/react-query";

const BASE_URL = "https://kitsu.io/api/edge";

export function useSuspenseGetAnimes() {
  const { data } = useSuspenseQuery({
    queryKey: ["animes"],
    queryFn: async ({ signal }) => {
      const response = await fetch(`${BASE_URL}/anime`, {
        method: "GET",
        signal: signal,
        headers: {
          accept: "application/vnd.api+json",
          "content-type": "application/vnd.api+json",
        },
      });

      const body = await response.json();

      if (!response.ok) {
        throw new Error(`failed to fetch: ${body.message}`);
      }

      return body;
    },
  });

  return { data };
}
