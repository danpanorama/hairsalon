const mysql = require("mysql2");
require('dotenv').config();
// let pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12344",
//   database: "samia",
//   waitForConnections: true, 
//   connectionLimit: 10,
//   queueLimit: 0,
// });



let pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASS,
  waitForConnections: true, 
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
