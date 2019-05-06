const http = require('http');
// const querystring = require('querystring');

const server = http.createServer((req, res) => {
  console.log(req.method);
  if(req.method === 'GET'){ res.end('GET') }
  if(req.method === 'POST'){
    console.log('content-type', req.headers['content-type']);

    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      console.log(postData);
      res.end('Hello world')
    })
  }
})

server.listen(8000);
console.log('OK')
// Http Get Demo
// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   console.log(req.url);
//   const query = querystring.parse(req.url.split('?')[1]);
//   console.log(query)
//   res.end(JSON.stringify( query))
// })

// Test cases:
// http://localhost:8000/api/list?name=dfsdfs