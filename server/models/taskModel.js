const tasks = require('../db/tasks.json');

/**
 * Returns all the tasks available in the DB.
 * @returns Promise
 */
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(tasks);
  });
}

module.exports = {
  findAll
};