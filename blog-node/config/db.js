const env = process.env.NODE_ENV;

let MYSQL_CONFIG;
let REDIS_CONF;

if(env === "dev"){
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '521xhz!',
    database: 'myblog'
  }

  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
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

  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONFIG,
  REDIS_CONF
}