const express         = require('express');
const app             = express();
const todoController  = require('./controllers/todoController');

// set up template engine 
app.set('view engine' , 'ejs');

//redirect static files
app.use(express.static('./public'))

//fire controllers
todoController(app);
//listen to a port
app.listen(3000);
console.log('server open to port 3000');