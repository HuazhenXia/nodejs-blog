const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel')


const userRouterHandler = (req, res) => {
  const method = req.method;

  //login
  if(method === "POST" && req.path==="/api/user/login"){
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then(data => {
      if(data.username){
        return new SuccessModel();
      }else{
        return new ErrorModel("Fail to login")
      }
    })
  }

  //auth login
  if(method === "GET" && req.path==="/api/user/login-test"){
    if(req.cookie.username){
      return Promise.resolve(new SuccessModel());
    }
    return Promise.resolve(new ErrorModel('Have not logged in'))
  }
}

module.exports = userRouterHandler;