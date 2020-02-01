const http = require('http');

const server = http.createServer(function(req,res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200 , {'Content-Type' : 'application/json'});
  const obj = {
    name : 'Ryu' ,
    job  : 'Street Fighter',
    age  : 30
  }
  res.end(JSON.stringify(obj))
});

server.listen(3000 , 'localhost');