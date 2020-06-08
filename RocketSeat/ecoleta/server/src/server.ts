import express, { response } from 'express';

const app = express()

const users = [
    'Diego',
    'Cris',
    'Robs'
]

app.get('/users', (req,res)=> {
    res.json(users)
})

app.get('/users/:id' , (req,res)=> {
    const id = Number(req.params.id);
    const user = users[id];

    return res.json(user)

})

app.post('/users',(req,res)=>{
    const user = {
        name : 'Cris',
        email : 'crisrfab@gmail.com'
    }

    return res.json(user)
})

app.listen(3333);