const Task = require("../models/taskModel");
const { getPostData } = require("../utils");

async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(tasks));
    res.end();
  } catch (error) {
    console.error(error);
  }
}

async function createTasks(req, res) {
  try {
    const body = await getPostData(req);
    const { name, completed } = JSON.parse(body);
    const task = { name, completed };
    const newTask = await Task.create(task);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newTask));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getTasks,
  createTasks,
};
