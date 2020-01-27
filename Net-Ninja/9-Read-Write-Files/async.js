const fs = require('fs');

// Async Method is ByPass
fs.readFile('./ReadMe.txt','utf8',function(err,data){
  fs.writeFileSync('./AsyncWrite.txt',data);
  console.log(data); 
  }
);

console.log('You Reading a Sync method First!')