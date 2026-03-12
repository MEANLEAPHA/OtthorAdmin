const e = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();


const dbconfig = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,

  connectTimeout: 30000,     
  enableKeepAlive: true,      
  keepAliveInitialDelay: 0    
});


module.exports = dbconfig;
