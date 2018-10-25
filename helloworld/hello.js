/** 
 * below code is an example of running a simple server application using the node.js
 * nodejs uses single threaded architecture. The focus here is to create callback functions.
 * Each request will execute the callback function asynchronously
 */

var http = require('http'); //define an object with http

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Ashish is running");
    setTimeout(function () {
        res.write("Ashish has stoopped");
        res.end();
    }, 5000);
}).listen(12345); //creates a callback function,which complete execution after 5000 ms timeout
console.log("server started"); //to start the server