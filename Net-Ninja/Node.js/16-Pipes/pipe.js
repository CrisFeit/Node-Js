const http = require('http');
const fs   = require('fs');

const server = http.createServer(function(req,res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200 , {'Content-Type' : 'text/plain'});
  const readStream  = fs.createReadStream(__dirname + '/lorem.txt',{encoding:'utf8'});
  readStream.pipe(res);
});

server.listen(3000 , 'localhost');
console.log('Yo dawgs , now listening to port 3000');
