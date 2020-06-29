require('dotenv/config')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema.graphql')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
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