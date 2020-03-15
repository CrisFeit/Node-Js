const express = require('express');
const path = require('path')
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine' , 'pug')


app.get('/',function(req,res){
  
  let articles = [
    {
      id : 1,
      title : 'Article One',
      author: 'Brad Traversy',
      body  : 'This is article One'
    },  
    {
      id : 2,
      title : 'Article Two',
      author: 'John Doe',
      body  : 'This is article Two'
    } , 
    {
      id : 3,
      title : 'Article Three',
      author: 'Julliet Sabara',
      body  : 'This is article Three'
    }  
  ]

  res.render('index',{
    title: 'Articles',
    articles : articles
  })
})
app.get('/articles/add',function(req,res){
  res.render('add-article',{
    title: 'Add Article'
  })
})

app.listen(3000,function(){
  console.log('Server started on port 3000...');
})