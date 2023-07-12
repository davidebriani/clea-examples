const express = require("express");
const cors = require("cors");

const port = 5001;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({"message": "Hello NodeJS"});
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
