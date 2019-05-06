const serverHandler = (req, res) => {
  //set res type
  res.setHeader('Content-type', 'application/json')
  console.log(process.env) 
  const resData = {
    name: 'Huazhen Xia',
    site: 'localhost',
    env: process.env.NODE_ENV
  }

  res.end(JSON.stringify(resData))
}

module.exports = serverHandler