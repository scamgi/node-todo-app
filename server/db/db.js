const mysql = require("mysql2/promise");
const { dbConfig } = require("./config");

async function query(sql, params) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  query,
};
