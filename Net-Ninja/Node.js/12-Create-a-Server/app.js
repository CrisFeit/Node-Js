const http = require('http');

const server = http.createServer((req,res)=>{
  console.log('request was made in : '+ req.url);
  res.writeHead(200 , {'Content-Type' : 'text/plain'});
  res.end('Hey Open Conection');
});

server.listen(3000 , 'localhost');

console.log('Yo Listening to port 3000');