
const fs   = require('fs');

const readStream  = fs.createReadStream(__dirname + '/lorem.txt' ,{encoding:'utf8'});
const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// Slice chunks of data
readStream.on('data' , function (chunk){
  console.log('new chunk received');
  writeStream.write(chunk)
});

// // Do the same as readStream.on('data' function(){...})
// readStream.pipe(writeStream);