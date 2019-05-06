const http = require('http')

//use VSCode debugger tool to debug step by step
console.log(100);
console.log(100);

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<h1>Hello world</h1>')
})

server.listen(3001, () => {
  console.log("Server Listens")
})