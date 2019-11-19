import got from "got";

export default async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Invalid request. Please provide a movie ID." });
  }

  const payload = await got(`http://www.omdbapi.com/`, {
    json: true,
    query: new URLSearchParams([
      ["apikey", process.env.OMDB_API_KEY],
      ["i", id]
    ])
  });

  res.json(payload.body);
};
