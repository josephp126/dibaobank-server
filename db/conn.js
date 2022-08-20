const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
  connectionLimit: 10,
});

pool.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

var sql = "insert into table values(?,?,?)";
var args = [1, "dfd", 2];
pool.query(sql, args);

module.exports = pool;
