// const express = require("express");
// const cors = require("cors");
// const app = express();
// const path = require('path');

// app.use(cors());
// app.use(express.json());


// app.use(express.static(path.join(__dirname, "../frontend/dist")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });


// // Start Server
// const port = 3000;
// app.listen(port, () => {
//     console.log(`🚀 Server running at http://localhost:${port}`);
// });
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Path to frontend dist (two levels up from backend/src)
const frontendDist = path.join(__dirname, '../../frontend/dist');

// Serve static assets (JS, CSS, images)
app.use(express.static(frontendDist));

// Fallback: for any request not handled by static middleware, send index.html
// This supports client-side routing (React Router, etc.)
app.use((req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});