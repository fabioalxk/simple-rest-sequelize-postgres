const Sequelize = require("sequelize").Sequelize;

// Option 1: Passing parameters separately
const sequelize = new Sequelize("codegig", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
