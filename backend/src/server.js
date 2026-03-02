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

// Determine the path to the frontend dist folder
// process.cwd() is typically the root of your repo on Render
const frontendDist = path.join(process.cwd(), 'frontend/dist');

// Serve static files
app.use(express.static(frontendDist));

// Serve index.html for any unmatched routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});
app.get('/debug', (req, res) => {
  const fs = require('fs');
  res.json({
    cwd: process.cwd(),
    __dirname,
    frontendDistExists: fs.existsSync(path.join(process.cwd(), 'frontend/dist')) 
      ? 'frontend/dist exists' 
      : 'not found',
    filesAtCwd: fs.readdirSync(process.cwd()),
  });
});
// Start Server
const port = process.env.PORT || 3000; // Use Render's assigned port
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});