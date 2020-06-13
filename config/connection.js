// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
    port: 3306,
    host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ci6x184naqtb2so7",
    password: "k85ihpgsneu16rpj",
    database: "lcuqs5ux986qociq",
  });
}

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
