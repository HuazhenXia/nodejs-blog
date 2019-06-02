const { exec } = require('../../db/mysql'); 

const loginCheck = (username, passward) => {
  const sql = `
    select username, realname from users where username='${username}' and password='${passward}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  loginCheck
}