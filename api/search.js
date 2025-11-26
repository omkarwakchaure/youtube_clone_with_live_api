export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${encodeURIComponent(
    query
  )}&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Return only items array to simplify frontend
    res.status(200).json(data.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Search fetch failed" });
  }
}
