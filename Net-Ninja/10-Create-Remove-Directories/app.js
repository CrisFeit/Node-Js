var fs = require('fs');


//create a directory
// fs.mkdirSync('stuff');

//remove a directory
// fs.rmdirSync('Stuff')

fs.mkdir('Another',function(){
  fs.readFile('read.txt','utf8',(err,data)=>{
    fs.writeFileSync('./Another/writeAnother.txt',data,'utf8');
  });
});

//delete a file then the directory: warning throw a error if the file doesn't exists;
// fs.unlink('./Another/writeAnother.txt',function(){
//   fs.rmdirSync('./Another')
// });
