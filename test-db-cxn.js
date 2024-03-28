const mysql = require('mysql');

// Database connection configuration
const dbConfig = {
  host: 'mysql.towerofzurpalen.xyz',
  port: '3306',
  user: 'zelda_n_l1nk',
  password: 'Ch3ss-K1d-R00k!',
  database: 'tower_of_zurpalen_13z91p'
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
  
  // Perform any additional database operations here if needed
  
  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      return;
    }
    console.log('Database connection closed.');
  });
});
