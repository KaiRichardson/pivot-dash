//Install express server
const bodyParser = require("body-parser");
const express = require("express");
const events = require("./events");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

// connecting to SQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "timeline",
  password: "password",
  database: "timeline",
});

connection.connect();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/pivot-dash"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/pivot-dash/index.html"));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
