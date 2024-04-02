const http = require("http");
const { getTasks, createTasks, updateTask, deleteTask } = require('./controllers/taskController');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'GET' && req.url === '/api/tasks') {
    getTasks(req, res);
  }
  else if (req.method === 'POST' && req.url === '/api/tasks') {
    createTasks(req, res);
  }
  else if (req.method === 'PUT' && req.url.match(/\/api\/tasks\/([0-9]+)/)) {
    /**
     * /api/tasks/...
     * ['', 'api', 'tasks', '...']
     */
    const id = req.url.split('/')[3];
    updateTask(req, res, id);
  }
  else if (req.method === 'DELETE' && req.url.match(/\/api\/tasks\/([0-9]+)/)) {
    const id = req.url.split('/')[3];
    deleteTask(req, res, id);
  }
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Route Not Found' }));
    res.end();
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
