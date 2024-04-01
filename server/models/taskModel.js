const tasks = require("../db/tasks.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");
/**
 * Returns all the tasks available in the DB.
 * @returns Promise
 */
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(tasks);
  });
}

function create(task) {
  return new Promise((resolve, reject) => {
    const newTask = { id: uuidv4(), ...task };
    tasks.push(newTask);
    writeDataToFile("./db/tasks.json", tasks);
    resolve(newTask);
  });
}

module.exports = {
  findAll,
  create,
};
