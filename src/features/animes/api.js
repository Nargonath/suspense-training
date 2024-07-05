const BASE_URL = "https://kitsu.io/api/edge";

export async function useSuspenseGetAnimes() {
  async function getAnimes() {
    const response = await fetch(`${BASE_URL}/anime`, {
      method: "GET",
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
  }

  const promise = getAnimes();
  throw promise;
}
