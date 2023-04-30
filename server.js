const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    if (req.url === '/' || req.url === '/home') {
        let data=fs.readFileSync('./public/index.html','utf8')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
    else if (req.url === '/style.css') {
        let data=fs.readFileSync('./public/style.css','utf8')
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
    }
    else if (req.url === '/script.js') {
        let data=fs.readFileSync('./public/script.js','utf8');
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
    }
    else if(req.url === '/about') {
        let data=fs.readFileSync('./public/about.html','utf8');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    }
    else
        res.end("404 Not Found");
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


//Using fs file exists sync
// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer(function (req, res) {
//
//     if (req.url === '/' || req.url === '/home') {
//         let result=fs.existsSync('./public/index.html')
//         if (result) {
//             let data=fs.readFileSync('./public/index.html', 'utf8');
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             res.end();
//         }
//         else res.end("404 Not Found");
//     }
//     else if (req.url === '/style.css') {
//         let result=fs.existsSync('./public/style.css')
//         if (result) {
//             let data=fs.readFileSync('./public/style.css','utf8');
//             res.writeHead(200, {'Content-Type': 'text/css'});
//             res.write(data);
//             res.end();
//         }
//         else res.end("404 Not Found");
//     }
//     else if (req.url === '/script.js') {
//         let result=fs.existsSync('./public/script.js')
//         if (result) {
//             let data=fs.readFileSync('./public/script.js','utf8');
//             res.writeHead(200, {'Content-Type': 'text/javascript'});
//             res.write(data);
//             res.end();
//         }
//         else res.end("404 Not Found");
//     }
//     else if(req.url === '/about') {
//         let result=fs.existsSync('./public/about.html')
//         if (result) {
//             let data=fs.readFileSync('./public/about.html','utf8');
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             res.end();
//         }
//         else res.end("404 Not Found");
//     }
//     else {
//         res.end("404 Not Found");
//     }
// });
//
// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

