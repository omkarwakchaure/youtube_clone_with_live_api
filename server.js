// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// const app = express();

// // Suggestion API route
// app.get("/api/suggest", async (req, res) => {
//   const q = req.query.q;

//   if (!q) {
//     return res.status(400).json({ error: "Missing query" });
//   }

//   const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
//     q
//   )}`;

//   try {
//     const response = await fetch(url); // built-in fetch
//     const data = await response.json();
//     res.json(data);
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Suggestion fetch failed" });
//   }
// });

// // Videos API route
// app.get("/api/videos", async (req, res) => {
//   const url =
//     "https://youtube.googleapis.com/youtube/v3/videos" +
//     "?part=snippet,contentDetails,statistics" +
//     "&chart=mostPopular" +
//     "&maxResults=50" +
//     "&regionCode=IN" +
//     "&key=" +
//     process.env.GOOGLE_API_KEY;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Videos fetch failed" });
//   }
// });

// // Search API route
// app.get("/api/search", async (req, res) => {
//   const query = req.query.q;
//   if (!query) return res.status(400).json({ error: "Missing query" });

//   const url =
//     "https://youtube.googleapis.com/youtube/v3/search" +
//     `?part=snippet&type=video&maxResults=25&q=${encodeURIComponent(query)}` +
//     "&key=" +
//     process.env.GOOGLE_API_KEY;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Search fetch failed" });
//   }
// });

// // Live Chat API route
// app.get("/api/livechat", async (req, res) => {
//   const id = req.query.id;
//   if (!id) return res.status(400).json({ error: "Missing liveChatId" });

//   const url =
//     "https://youtube.googleapis.com/youtube/v3/liveChat/messages" +
//     `?liveChatId=${id}&part=snippet,authorDetails` +
//     "&key=" +
//     process.env.GOOGLE_API_KEY;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Livechat fetch failed" });
//   }
// });

// // Static build (optional)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "dist")));

// const PORT = 5001;
// app.listen(PORT, () =>
//   console.log("Server running at http://localhost:" + PORT)
// );
