const express = require('express');
const app     = express();
app.set('view engine' , 'ejs'); 

app.get('/',function(req , res){
  res.render('index');
});
app.get('/contact',function(req , res){
  res.render('contact');
});

app.get('/profile/:name',function(req,res){
  const data = {age:30 , job : 'Street Fighter' , hobbies:['eating','fighting','fishing']}
  res.render('profile', {person : req.params.name, data});
})

app.listen(3000);

