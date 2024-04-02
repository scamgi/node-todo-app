const tasks = require("../db/tasks.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

const filenameDB = './db/tasks.json';

/**
 * Returns all the tasks available in the DB.
 * @returns Promise
 */
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(tasks);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const task = tasks.find((p) => p.id === id);
    resolve(task);
  });
}

function create(task) {
  return new Promise((resolve, reject) => {
    const newTask = { id: uuidv4(), ...task };
    tasks.push(newTask);
    writeDataToFile(filenameDB, tasks);
    resolve(newTask);
  });
}

function update(id, task) {
  return new Promise((resolve, reject) => {
    const index = tasks.findIndex(p => p.id === id);
    tasks[index] = { id, ...task };
    writeDataToFile(filenameDB, tasks);
    resolve(tasks[index]);
  });
}

module.exports = {
  findAll,
  create,
  update,
  findById
};
