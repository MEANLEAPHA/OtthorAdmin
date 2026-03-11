const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "index.html")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const {Authentication} = require("./routes/Authentication/authenticationRoute");
Authentication(app);

// Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
