var mysql = require('mysql2');

require('dotenv').config();
console.log(process.env);

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.SENHABANC,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});