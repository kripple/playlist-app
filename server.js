//Modified from: http://blog.modulus.io/build-your-first-http-server-in-nodejs

var http = require('http');
const PORT = 8080; 
var server = http.createServer(handleRequest);
var dispatcher = require('httpdispatcher');

//Start server
server.listen(PORT, function(){
    //Triggers handleRequest when server is successful
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
// dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Home PATH');
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

