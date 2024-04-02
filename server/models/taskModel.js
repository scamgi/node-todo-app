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

async function create(task) {
  try {
    const result = await db.query(
      `INSERT INTO Tasks (name, completed) VALUES ("${task.name}", ${task.completed})`
    );
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function update(id, task) {
  try {
    const result = await db.query(
      `UPDATE Tasks SET name = "${task.name}", completed = ${task.completed} WHERE id = ${id}`
    );
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function remove(id) {
  try {
    const result = await db.query(`DELETE FROM Tasks WHERE id = ${id}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  findAll,
  create,
  update,
  findById,
  remove,
};
