const http = require("http");
const { tasks } = require('./db/tasks.ts');
const cors = require('cors');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'GET' && req.url === '/api/tasks') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(tasks));
    res.end();
  }
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Route Not Found' }));
    res.end();
  }
});

const PORT = 5000;

server.listen(PORT, () => console.log(`PORT: ${PORT}`));
