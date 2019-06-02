const { 
  getList, 
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel');


const blogRouterHandler = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  //get blog list
  if(method === "GET" && req.path === "/api/blog/list"){
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then(listData => {
      return new SuccessModel(listData);
    })

  }

  //get blog detail
  if(method === "GET" && req.path === "/api/blog/detail"){
    const result = getDetail(id);
    return result.then(data => {
      return new SuccessModel(data)
    });
  }

  //create a new blog
  if(method === "POST" && req.path === "/api/blog/new"){
    const blogData = req.body;
    blogData.author = "Me"; // change when finish logining
    const result = newBlog(blogData);
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //update a blog
  if(method === "POST" && req.path === "/api/blog/update"){
    const result = updateBlog(id, req.body);
    if(result) return new SuccessModel();
    else return new ErrorModel("Fail to update blog")
  }

  //delete a blog
  if(method === "POST" && req.path === "/api/blog/delete"){
    const result = deleteBlog(id);
    if(result) return new SuccessModel();
    else return new ErrorModel("Fail to delete blog")
  }
}

module.exports = blogRouterHandler;