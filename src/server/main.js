const express = require ("express");
const ViteExpress = require("vite-express");
const morgan = require('morgan');
require("dotenv").config();
const app = express();
const mysql = require('mysql2');


// Database connection configuration - thanks chatGPT
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database...');
});


//MIDDLEWARE//
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 'verify' function via util.js checks for valid token. Import with: const verify = require('../util') 

//API ROUTES//
app.use('/api', require('./api'))
app.use('/auth', require('./auth'))

//SERVER//
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
