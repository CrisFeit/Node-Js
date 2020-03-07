const express = require('express');

const server = express();
server.use(express.json());

// Route Params  = /users/1
// Request body  = { "name": "Diego" , "email": "email@gmail.com" }

const users = ['Diego','Claudio','Victor'];

server.get('/users', (req ,res) => {
    return res.json(users);
})

server.get('/users/:index' , (req,res) => {
  const nome = req.query.nome; // Query Params ?teste=1
  const id   = req.params.id; // Query Params ?teste=1
  const { index } = req.params
  console.log(index)
  // return res.json({message : `Hello ${nome}`});
  return res.json({message : `Buscando usuario ${users[index]}`});
})

server.post('/users', (req,res) => {
  const { name } = req.body
  users.push(name);
  return res.json(users);
})

server.put('/users/:index', (req,res) => {
  const { index } = req.params;
  const { name }  = req.body;
  console.log(req.body)
  users[index]    = name;

  return res.json(users)
})

server.delete('/users/:index', (req,res) => {
  const { index } = req.params;
  users.splice(index , 1);

  return res.send()
})

server.listen(3000);