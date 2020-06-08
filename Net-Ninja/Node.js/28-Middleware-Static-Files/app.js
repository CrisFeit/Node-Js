const express = require('express');
const app     = express();

// raw redirect middleware
// app.use('/assets',function(req ,res , next){
//   console.log(req.url)
//   next(); // go to the next app.get()
// })

//Express Middleware
app.use('/assets',express.static('assets'));

app.get('/',function(req , res){
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000);

