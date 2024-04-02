let tasks = require("../db/tasks.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");
const db = require("../db/db");

const filenameDB = "./db/tasks.json";

// TODO create MySql connection

/**
 * Returns all the tasks available in the DB.
 * @returns Promise
 */
function findAll() {
  try {
    const result = db.query(`SELECT id, name, completed FROM Tasks`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function findById(id) {
  try {
    const result = await db.query(
      `SELECT id, name, completed FROM Tasks WHERE id = ${id}`
    );
    return result;
  } catch (error) {
    console.error(error);
  }
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
    const index = tasks.findIndex((p) => p.id === id);
    tasks[index] = { id, ...task };
    writeDataToFile(filenameDB, tasks);
    resolve(tasks[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    tasks = tasks.filter((p) => p.id !== id);
    writeDataToFile(filenameDB, tasks);
    resolve();
  });
}

module.exports = {
  findAll,
  create,
  update,
  findById,
  remove,
};
