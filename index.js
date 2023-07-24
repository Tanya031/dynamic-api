const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Dynamic API endpoint
app.post("/api", (req, res) => {
  try {
    // Get the data from the request body
    const data = req.body;

    const response = data;

    // Return the response in JSON format
    res.json(response);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
