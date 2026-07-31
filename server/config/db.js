const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Akshay@123",
  database: "shiftflow",
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed");
    console.log(err);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = db;