const Task = require('../models/taskModel');

async function getTasks(req, res) {
  try {    
    const tasks = await Task.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(tasks));
    res.end();
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getTasks
}