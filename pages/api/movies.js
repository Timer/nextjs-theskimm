import got from "got";

export default async (req, res) => {
  const { search } = req.query;
  if (!search) {
    return res
      .status(400)
      .json({ message: "Invalid request. Please provide a search term." });
  }

  const payload = await got(`http://www.omdbapi.com/`, {
    json: true,
    query: new URLSearchParams([
      ["apikey", process.env.OMDB_API_KEY],
      ["type", "movie"],
      ["s", search]
    ])
  });

  res.json(payload.body);
};
