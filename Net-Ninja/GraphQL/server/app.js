require('dotenv/config')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema.js')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URI ,{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to database library');
    
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
})
)

app.listen(4000, ()=> {
    console.log('linstening on port 4000');  
})