const env = process.env.NODE_ENV;

let MYSQL_CONFIG;

if(env === "dev"){
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '521xhz!',
    database: 'myblog'
  }
}

if(env === "production"){
  //change when I have a server
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '521xhz!',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONFIG
}