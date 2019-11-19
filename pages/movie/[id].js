import fetch from "isomorphic-fetch";

function Movie({ Title, Plot, Poster, Released }) {
  return (
    <main>
      <h1>{Title}</h1>
      <p>{Released}</p>
      <p>{Plot}</p>
      {Poster && <img src={Poster} />}
    </main>
  );
}

Movie.getInitialProps = async ({ req, query }) => {
  const movieId = query.id;

  let prefix = "";
  if (typeof window === "undefined") {
    prefix = req.headers.host;
    if (prefix.includes("localhost")) prefix = `http://${prefix}`;
    else prefix = `https://${prefix}`;
  }

  const result = await fetch(
    `${prefix}/api/movie/${encodeURIComponent(movieId)}`
  ).then(res => res.json());

  return result;
};

export default Movie;
