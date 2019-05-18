const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config/db');

const con = mysql.createConnection(MYSQL_CONFIG);

con.connect();

function exec(sql){
  return new Promise((resolve, reject) => {
    connect.query(query, (err, result) => {
      if(err){
        reject(err);
        return;
      }
    
      resolve(result)
    })
  })
}

module.exports = {
  exec
}
