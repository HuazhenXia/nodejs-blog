const blogRouterHandler = (req, res) => {
  const method = req.method;

  //get blog list
  if(method === "GET" && req.path === "/api/blog/list"){
    return {
      msg: "This is for getting blog lists"
    }
  }

  //get blog detail
  if(method === "GET" && req.path === "/api/blog/detail"){
    return {
      msg: "This is for getting blog detail"
    }
  }

  //create a new blog
  if(method === "POST" && req.path === "/api/blog/new"){
    return {
      msg: "This is for creating a blog"
    }
  }

  //update a blog
  if(method === "POST" && req.path === "/api/blog/update"){
    return {
      msg: "This is for updating a blog"
    }
  }

  //delete a blog
  if(method === "POST" && req.path === "/api/blog/delete"){
    return {
      msg: "This is for deleting a blog"
    }
  }
}

module.exports = blogRouterHandler;