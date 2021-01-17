const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//API call for GET Request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//API call for POST Request
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

//Starting the Server
app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});