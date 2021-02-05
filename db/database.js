const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employees_db",
  password: "Ch1ck3nB0n3@SQL",
});

module.exports = connection;
