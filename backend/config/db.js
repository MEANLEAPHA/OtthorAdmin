// Import mysql
const e = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool
const dbconfig = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,

  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,

  connectTimeout: 30000,     
  enableKeepAlive: true,      
  keepAliveInitialDelay: 0    
});

// Export the database
module.exports = dbconfig; 
