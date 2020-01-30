const http = require('http');
const fs   = require('fs');

const server = http.createServer(function(req,res) {
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html',{encoding:'utf8'}).pipe(res);
  }
  else if(req.url === '/contact'){
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html',{encoding:'utf8'}).pipe(res);
  }
  else if(req.url === '/api/ninjas'){
  res.writeHead(200 , {'Content-Type' : 'application/json'});
  const obj = {
    name : 'Ryu' ,
    job  : 'Street Fighter',
    age  : 30
  }
  res.end(JSON.stringify(obj))
  }
  else{ 
    res.writeHead(404 , {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html',{encoding:'utf8'}).pipe(res);
  }
});

server.listen(3000 , 'localhost');
