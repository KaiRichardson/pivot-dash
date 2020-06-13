//Install express server
const bodyParser = require("body-parser");
const express = require("express");
const events = require("./events");
const cors = require("cors");
const path = require("path");

const app = express();

connection.connect();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/pivot-dash"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/pivot-dash/index.html"));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
