export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.text(); // Google returns text, not JSON

    const parsed = JSON.parse(data);
    const suggestions = parsed[1];

    res.status(200).json(suggestions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Suggestion fetch failed" });
  }
}
