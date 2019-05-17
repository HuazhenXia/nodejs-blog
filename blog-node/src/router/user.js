const { loginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel')


const userRouterHandler = (req, res) => {
  const method = req.method;

  //login
  if(method === "POST" && req.path==="/api/user/login"){
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if(result){
      return new SuccessModel();
    }else{
      return new ErrorModel("Fail to login")
    }
  }
}

module.exports = userRouterHandler;