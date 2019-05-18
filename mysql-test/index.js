const mysql = require('mysql');

const connect = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '521xhz!',
  database: 'myblog'
})

connect.connect();

const query = 'select * from users;'
connect.query(query, (err, result) => {
  if(err){
    console.log(err);
    return;
  }

  console.log(result)
})

connect.end();
