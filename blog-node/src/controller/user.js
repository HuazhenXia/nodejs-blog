const loginCheck = (username, passward) => {
  //mock first
  if(username === "aaron" && passward === "123"){
    return true
  }
  return false
}

module.exports = {
  loginCheck
}