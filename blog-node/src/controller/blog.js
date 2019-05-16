const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "title A",
      content: "content A",
      createTime: 1546610491100,
      author: "Lily"
    },
    {
      id: 2,
      title: "title B",
      content: "content B",
      createTime: 1546610491800,
      author: "Liz"
    },
  ]
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

module.exports = {
  getList, 
  getDetail,
  newBlog,
  updateBlog
}