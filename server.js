var http = require('http'); // Import Node.js core module

var server = http.createServer((req, res) => {   //create web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/plain' }); 

        // set response content    
        res.write(`
        Hello there, my name is Ayobami 'Awesome' Ojumu, this my zuri simple server.   
    `);
        res.end();
    
    }
    else if (req.url == "/json") {
        // set response header
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // set response content  
        res.write(`{
            "name" : "Ayobami 'Awesome' Ojumu",
            "country" : "Nigeria",
            "hobbies" : [{
                "sport" : ["basketball", "tennis", "football"],
                "relaxation" : ["book", "youtube", "movies"]
            }]
            }`);
        res.end();
    
    }
    else if (req.url == "/web") {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content  
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Awesome@Zuri</title>
        </head>
        <body
            style="text-align: center; background-color: grey;"        
        >
            <h1>Awesome's simple Web page</h1>
            <h2>Welcome to Zuri back end</h2>
        </body>
        </html>`);
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(7000); //6 - listen for any incoming requests

console.log('Awesome web server at port 7000 is running..')