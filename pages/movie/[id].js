function Movie({ movieId }) {
  return (
    <main>
      <h1>{movieId}</h1>
    </main>
  );
}

Movie.getInitialProps = ({ query }) => {
  const movieId = query.id;
  return { movieId };
};

export default Movie;
