export default async function handler(req, res) {
  const url =
    "https://youtube.googleapis.com/youtube/v3/videos" +
    "?part=snippet,contentDetails,statistics" +
    "&chart=mostPopular" +
    "&maxResults=50" +
    "&regionCode=IN" +
    "&key=" +
    process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fetch failed" });
  }
}
