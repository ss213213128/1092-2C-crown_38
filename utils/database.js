const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
    host:'localhost', 
    user: 'root', 
    password: 'ops223361',
    database: 'crown_xx',
  });

module.exports = pool.promise();