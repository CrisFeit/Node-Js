/*
    Primary File Api
*/

// Dependencies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder
const config = require('./config')

// The server should responde t all request with a string
const server = http.createServer((req, res) => {
    
    // Get the URL and parse it
    let parsedUrl = url.parse(req.url, true)
    // Get the path
    let path = parsedUrl.pathname
    let trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Get the Query Strin as a object
    let querySringObject = parsedUrl.query

    //Get the http Method
    let method = req.method.toLowerCase()

    // Get the Headers
    let headers = req.headers

    // Get the payload, if any
    let decoder = new StringDecoder('utf-8')
    let buffer = ''
    req.on('data', (data) => {
        buffer += decoder.write(data)
    })
    req.on('end', () => {
        buffer += decoder.end()

        // Choose the handler this request should got to. If one is not 
        let chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath]: handlers.notFound

        // Construct the data object to send to the hanlder
        const data = {
            trimmedPath,
            querySringObject,
            method,
            headers,
            'payload': buffer
        }

        // Route the request to the handler specified in the router
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

        // Log the request path
        console.log('Request received on path', trimmedPath,
            '\nwith this method: ', method,
            '\nQuery String parameters: ', querySringObject,
            '\nRequest received with these headers: ', headers,
            '\nRequest received with these payload: ', buffer
        );
    })
})

// Start the server
server.listen(config.port, () => console.log(`The server is listening on port ${config.port} in ${config.envName} mode`))

// Define the handlers
const handlers = {}

//Sample handler
handlers.sample = function(data,callback){
    // Callback a http status code, and a payload object
    callback(406,{'name': 'sample hander'})
}

//Not found handler
handlers.notFound = function(data,callback){

    callback(404,{'name': 'Not Founded'})
}

// Define a request router 
const router = {
    'sample': handlers.sample
}