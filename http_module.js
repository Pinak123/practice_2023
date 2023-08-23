const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url=='/') {
        res.end('Welcome to the Homepage!'); 
    }
    if (req.url=='/about') {
        res.end('About Page'); 
    }
    res.end('OOPs we coudnt find the page you are looking for');

    
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});