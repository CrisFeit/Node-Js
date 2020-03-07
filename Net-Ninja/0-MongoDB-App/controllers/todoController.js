const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://cris:vA7w5s2fvQDTGqxu@cluster0-kdcoy.gcp.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//Create a Shema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
})

const Todo = mongoose.model('Todo' , todoSchema);


const urlencodedParser = bodyParser.urlencoded({ extended:false });

module.exports = function(app){

  app.get('/todo' ,(req,res)=> {
    //get data from mongoDb an pass it to view
    Todo.find({},function(err, data){
      if(err) throw err;
      res.render('todo' , {todos: data})
    });
  });


  app.post('/todo', urlencodedParser,(req,res)=> {
    //get data from the view and add it to mongodb
    let newTodo = Todo(req.body).save(function(err,data){
      res.json(data);
    });
  });

  app.delete('/todo/:item', (req,res)=> {
    //delete the requested item from mongoDb
    Todo.find({item: req.params.item.replace(/\-/g ,' ')}).deleteOne(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });
};