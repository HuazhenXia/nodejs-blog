const { exec } = require('../../db/mysql'); 

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if(author){
    sql += `and author='${author}' `
  }
  if(keyword){
    sql += `and title like '%${keyword}%' `
  }

  sql += `order by createtime desc`;

  return exec(sql)
}

const getDetail = (id) => {
  //use fake data by now, change later
  return {
    id: 1,
    title: "title A",
    content: "content A",
    createTime: 1546610491100,
    author: "Lily"
  }
}

const newBlog = (blogData = {}) => {
  console.log('new blog data: ', blogData)
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  console.log(id, blogData)
  return true;
}

const deleteBlog = (id) => {
  return true;
}

module.exports = {
  getList, 
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}