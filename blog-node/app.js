const blogRouterHandler = require('./src/router/blog');
const userRouterHandler = require('./src/router/user');


const serverHandler = (req, res) => {
  //set res type
  res.setHeader('Content-type', 'application/json')
  
  //get path
  const url = req.url;
  req.path = url.split('?')[0]

  //blog router
  const blogData = blogRouterHandler(req, res)
  if(blogData){
    res.end(JSON.stringify(blogData))
    return;
  }

  //user router
  const userData = userRouterHandler(req, res)
  if(userData){
    res.end(JSON.stringify(userData))
    return;
  }

  //404
  res.writeHead(404, {"Content-type": "text/plain"});
  res.write("404 Not Found");
  res.end();
}

module.exports = serverHandler

// env: process.env.NODE_ENV