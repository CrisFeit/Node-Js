require('dotenv/config');
const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// --> 7)  Mount the Logger middleware here
const logger = (req, res, next)=> {
  console.log(`
      Method: ${req.method} \n
      Path: ${req.path} \n
      Body: ${JSON.stringify(req.body)}\n
      Params: ${JSON.stringify(req.params)}\n
      Query ${JSON.stringify(req.query)}
  `)
  next();
  return
}
// --> 11)  Mount the body-parser middleware  here
app.use(express.json())
app.use(bodyParser.urlencoded({ extended : false }))

/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve static assets  */
app.use(express.static(path.resolve(__dirname,'public')))

/** 4) Serve an HTML file */
app.get('/' ,logger, (req,res)=> {
  res.sendFile(path.resolve(__dirname , 'views/index.html'))
})

/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
app.get('/json',logger,(req,res) => {
  let response = process.env.MESSAGE_STYLE === "uppercase" ? "Hello json".toUpperCase() : 'Hello json';

  res.json({
    message : response
  })
})

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
const middleware = (req,res,next)=> {
  req.time = new Date().toString()
  next()
  return
}

 app.get('/now', logger,middleware ,(req,res)=>{
    res.json({
      time : req.time
    })
 })

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo' ,logger,(req,res)=> {
    return res.json({
        echo: req.params.word
    })
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
const url = "/name"
const handlerGet = (req, res) => {
  const {first ,last } = req.query;
  res.json({
    name: `${first} ${last}`
  });
}

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */
const handlerPost = (req, res) => {
  
  const {first ,last } = req.body;
  res.json({
    name: `${first} ${last}`
  });
}
  
app.route(url).post(logger,handlerPost).get(logger,handlerGet)

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
