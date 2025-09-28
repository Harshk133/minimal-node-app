// Load .env variables
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Example env var
const GREETING = process.env.GREETING || "Hello from minimal Node app!";
const CODER = process.env.CODER || "env not loaded!";
const COUNT = process.env.COUNT || "env not loaded!";
const VAR = process.env.VAR || "env not loaded!";

// Root route
app.get('/', (req, res) => {
  res.send(`<h1>${GREETING}</h1><p>Running on port ${PORT}</p>`);
});
  
// Health check (good for Render)
app.get('/healthz', (req, res) => res.send("ok"));

app.get('/programmer', (req, res) => res.send("Hello, World Programmer"));

app.get('/coder', (req, res) => res.send(`${CODER} and repository count: ${COUNT}, ${VAR}`));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
