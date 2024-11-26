const express = require("express");
const databaseConnection = require("./db/database");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

databaseConnection();

app.use("/", require("./routes"));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
