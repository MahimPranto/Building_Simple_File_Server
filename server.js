const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    if (req.url === '/' || req.url === '/home') {
        let result=fs.existsSync('./public/index.html')
        if (result) {
            let data=fs.readFileSync('./public/index.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
        else res.end("404 Not Found");
    }
    else if (req.url === '/style.css') {
        let result=fs.existsSync('./public/style.css')
        if (result) {
            let data=fs.readFileSync('./public/style.css');
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        }
        else res.end("404 Not Found");
    }
    else if (req.url === '/script.js') {
        let result=fs.existsSync('./public/script.js')
        if (result) {
            let data=fs.readFileSync('./public/script.js');
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        }
        else res.end("404 Not Found");
    }
    else if(req.url === '/about') {
        let result=fs.existsSync('./public/about.html')
        if (result) {
            let data=fs.readFileSync('./public/about.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
        else res.end("404 Not Found");
    }
    else {
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
