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

async function findTaskById(req, res, id) {
  try {
    const tasks = await Task.findById(id);
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

async function updateTask(req, res, id) {
  try {
    const task = await Task.findById(id);

    if (!task) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Task Not Found" }));
      res.end();
    } else {
      const body = await getPostData(req);
      const { name, completed } = JSON.parse(body);
      const taskData = {
        name: name || task.name,
        completed: completed || task.completed,
      };

      const updatedTask = await Task.update(id, taskData);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedTask));
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteTask(req, res, id) {
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Task Not Found" }));
      res.end();
    } else {
      await Task.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: `Task ${id} removed.` }));
      res.end();
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getTasks,
  createTasks,
  updateTask,
  deleteTask,
  findTaskById,
};
