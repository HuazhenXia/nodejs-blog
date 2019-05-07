const userRouterHandler = (req, res) => {
  const method = req.method;

  //login
  if(method === "POST" && req.path==="/api/user/login"){
    return {
      msg: "User login"
    }
  }
}

module.exports = userRouterHandler;