
const http = require('http')
const url = require('url')


// Define the handlers
const handlers = {}

//Sample handler
handlers.hello = function(data,callback){
    // Callback a http status code, and a payload object
    return callback(200,{'message': 'welcome to hello world api!'})
}

//Not found handler
handlers.notFound = function(data,callback){
    return callback(404,{'message': 'Not Founded'})
}

// Define a request router 
const router = {
    'hello': handlers.hello
}

const server = http.createServer((req, res) => {

    // Get the URL and parse it
    let parsedUrl = url.parse(req.url, true)
    // Get the path
    let path = parsedUrl.pathname
    let trimmedPath = path.replace(/^\/+|\/+$/g, '')

    let chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath]: handlers.notFound
    
    const data = {
        trimmedPath,
    }
    
        chosenHandler(data, (statusCode,payload)=>{
            // Use the status code called back by the handler , or default to 200
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200

            // Use the payload back by handler, or default to an empty
            payload = typeof(payload) == 'object' ? payload : {}

            // Convert the paylad to a string
            const payloadString = JSON.stringify(payload)

            // Return the response
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(statusCode)
            res.end(payloadString)
            console.log('Returning this reponse',statusCode,payloadString);
        })
})

server.listen(3000,()=> console.log('server is listening on port 3000'))

