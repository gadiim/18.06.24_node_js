const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);

    const host = request.headers.host;
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(`Host: ${host}\n`);
    response.write(`Pathname: ${pathname}\n`);
    response.write(`Query parameters: ${JSON.stringify(query)}\n`);
    response.end();
});

const hostname = '127.0.0.1';
const port = 8080;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
