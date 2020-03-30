const express = require('express');

const server = express();
server.use(express.json());

// Route Params  = /users/1
// Request body  = { "name": "Diego" , "email": "email@gmail.com" }

const users = ['Diego','Claudio','Victor'];

server.use((req,res,next)=>{
  console.log(`Metodo : ${req.method} \nURL:${req.url} \nParams:${JSON.stringify(req.params)}`);

  return next();
})

function checkUserExists(req,res,next){
  if(!req.body.name){
    return res.status(400).json({error: 'User name is required'})
  }
  return next()
}

function checkUserInArray(req,res,next){
  const user = user[req.params.index]
  if (!users[req.params.index]){
    return res.status(400).json( { error : 'User does not exists' } )
  }
  req.user = user; // create a atribute in req
  return next()
}
server.get('/users', (req ,res) => {
    return res.json(users);
})

server.get('/users/:index' ,checkUserInArray, (req,res) => {
  // const nome = req.query.nome; // Query Params ?teste=1
  // const id   = req.params.id; // Query Params ?teste=1
  // return res.json({message : `Hello ${nome}`});
  return res.json(req.user);
})

server.post('/users', checkUserExists,(req,res) => {
  const { name } = req.body
  users.push(name);
  return res.json(users);
})

server.put('/users/:index',checkUserInArray,(req,res) => {
  const { index } = req.params;
  const { name }  = req.body;
  console.log(req.body)
  users[index]    = name;

  return res.json(users)
})

server.delete('/users/:index',checkUserInArray, (req,res) => {
  const { index } = req.params;
  users.splice(index , 1);

  return res.send()
})

server.listen(3000);