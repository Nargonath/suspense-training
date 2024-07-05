import { Suspense } from "react";

import { AnimesList } from "./features/animes/AnimesList";

function App() {
  return (
    <Suspense fallback={<h2>🔃 loading...</h2>}>
      <AnimesList />
    </Suspense>
  );
}

export default App;
