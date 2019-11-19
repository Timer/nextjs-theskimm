import { useState } from "react";
import { useDebounce } from "../utils/use-debounce";
import useSWR from "swr";
import { fetcher } from "../utils/swr";

export default function Search() {
  const [search, setSearch] = useState("");
  const activeSearch = useDebounce(search);

  const results = useSWR(
    activeSearch
      ? `/api/movies?search=${encodeURIComponent(activeSearch)}`
      : null,
    fetcher
  );

  return (
    <main>
      <div>
        <label>Search</label>&nbsp;
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
        {results.data ? (
          results.data.Search.map(result => (
            <div key={result.imdbID}>
              <h2>{result.Title}</h2>
              <p>Year: {result.Year}</p>
              {result.Poster && <img src={result.Poster}></img>}
            </div>
          ))
        ) : search ? (
          <p>Loading ...</p>
        ) : (
          <p>Search to get started</p>
        )}
      </div>
    </main>
  );
}
